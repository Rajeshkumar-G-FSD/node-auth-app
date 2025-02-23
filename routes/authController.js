const User = require('../models/User');
const { generateToken } = require('../middlewares/authMiddleware');

// Register a new user
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    const userData = await user.save();
    console.log(userData,"userData")
    const {password:_, ...others } = userData
    const token = await generateToken(others);
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login user and generate JWT
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid credentials');
    const {password:_, ...others } = user;
    const token = await generateToken(others);
    res.status(201).json({ message: 'User Login successfully', token });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login };