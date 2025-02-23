const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// API Documentation
app.get('/', (req, res) => {
  res.send(`
    <h1>API Documentation</h1>
    <ul>
      <li><b>POST /api/auth/register</b> - Register a new user</li>
      <li><b>POST /api/auth/login</b> - Login and get a JWT token</li>
    </ul>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));