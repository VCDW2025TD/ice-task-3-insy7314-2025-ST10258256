// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// //Create JWT 
// const createToken = (user) => 
//     jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: '1h'});

// //Register a new user
// exports.register = async (req, res) => {
//     const {email, password} = req.body;
//     try{
//         console.log("Registration request received:", req.body);
//         const existing = await User.findOne({email});
//         if(existing) return res.status(400).json({message: 'User already exists'});

//         const user = await User.create({email, password});
//         const token = createToken(user._id);
//         res.status(201).json({token});
//     } catch (error) {
//         res.status(500).json({message: 'Internal server error'});
//     }
// };

// // Login in an existing user
// exports.login = async (req, res) => {
//     const {email, password} = req.body;
//     try {
//         const user = await User.findOne({email});
//         if(!user || !(await user.comparePassword(password))) {
//             return res.status(400).json({message: 'Invalid credentials'});
//         }

//         const token = createToken(user._id);
//         res.json({token});
//     } catch (error) {
//         res.status(500).json({message: 'Internal server error'});
//     }
// };

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Create JWT token
const createToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

// Register a new user
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Registration request received:', req.body);

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ email, password: hashedPassword });

    // Create token
    const token = createToken(user._id);

    res.status(201).json({ token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login request received:', req.body);

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = createToken(user._id);

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
