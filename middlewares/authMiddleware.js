const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
async function generateToken(user) {
  console.log("user",user)
  try {
      const payload = { sub: user._id };
      const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      return token;
  } catch (err) {
      console.error(err);
      return null;
  }
}
module.exports = {authMiddleware, generateToken};