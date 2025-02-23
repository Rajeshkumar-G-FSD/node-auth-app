const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // process.exit(1);
  }
};

module.exports = connectDB;