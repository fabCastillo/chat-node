const mongoose = require('mongoose');

const connectToMongoDB = async () =>{
  try {
    const mongoURI = 'mongodb://localhost:27017/chat-node';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('[Mongoose] connection established');
  } catch (error) {
    console.error('[Mongoose] Error connecting to MongoDB', error);
  }
}

module.exports = connectToMongoDB;
