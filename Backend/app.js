// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: 'http://localhost:3000', // Adjust as needed for your frontend
//   credentials: true
// }));
// app.use(express.json());

// // Sample route
// const authRoutes = require('./routes/authRoutes');
// const { protect } = require('./middleware/authMiddleware');

// app.use('/api/auth', authRoutes);

// app.get("/api/protected", protect, (req, res) => {
//   res.json({ message: `Welcome, user ${req.user.id}`, timestamp: new Date()});
// });

// // app.get('/', (req, res) => {
// //   res.send('App is running');
// // });

// // app.get('/test', (req, res) => {
// //   res.json({ message: 'Test route is working' });
// // });

// module.exports = app;
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000', // frontend URL
  credentials: true
}));
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const { protect } = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes); // <-- make sure this is /api/auth

// Protected route test
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}`, timestamp: new Date()});
});

module.exports = app;
