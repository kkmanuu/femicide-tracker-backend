const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const countyRoutes = require('./routes/countyRoutes');
const femicideRoutes = require('./routes/femicideRoutes');
const perpetratorRoutes = require('./routes/perpetratorRoutes');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const db = require('./config/db');

dotenv.config();

const app = express();

// Test the DB connection on startup
db.getConnection()
  .then(() => {
    console.log('Connected to MySQL database');
  })
  .catch((err) => {
    console.error('Failed to connect to MySQL database:', err.message);
  });

// Enhanced CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Apply CORS settings
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/api', femicideRoutes);
app.use('/api/auth', routes.authRoutes);
app.use('/api/metadata', routes.metadataRoutes);
app.use('/api', countyRoutes);
app.use('/api', perpetratorRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
