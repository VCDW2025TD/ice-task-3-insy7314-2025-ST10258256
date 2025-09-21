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

    // Create new user
    const user = await User.create({ email, password });

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
    // Log the incoming login request
    console.log('Login request received:', req.body);

    const user = await User.findOne({ email });

    if (!user) {
      console.log(`Login failed: no user found with email ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Log the stored hashed password
    console.log('Stored hashed password:', user.password);

    // Compare the submitted password with the hashed password in DB
    const isMatch = await bcrypt.compare(password.trim(), user.password);

    // Log the result of password comparison
    console.log('Password match result:', isMatch);
    console.log('Password received:', `"${password}"`);


    if (!isMatch) {
      console.log(`Login failed: password does not match for email ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = createToken(user._id);

    console.log(`Login successful for email ${email}`);
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

