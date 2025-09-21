const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json({type: ['application/json', 'application/csp-report']}));

// Middleware
app.use(helmet());

// app.use(express.json());

const cspDirectives = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'"],
  styleSrc: ["'self'"],
  imgSrc: ["'self'", 'data:'],
  connectSrc: ["'self'", "https://localhost:3000"],
  frameAncestors: ["'none'"],
  upgradeInsecureRequests: []
};

app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    ...cspDirectives,
    "report-uri": ["/csp-report"],
  },
  reportOnly: process.env.NODE_ENV !== "production"
}));

app.use(cors({
  origin: 'https://localhost:5173',
  credentials: true
}));

// Routes
const authRoutes = require('./routes/authRoutes');
const { protect } = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes); 

// Protected route test
app.get("/api/protected", protect, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}`, timestamp: new Date()});
});

app.post("/csp-report", (req, res) => {
  console.log("CSP Violation:", JSON.stringify(req.body, null, 2));
  res.status(204).end();
});

module.exports = app;
