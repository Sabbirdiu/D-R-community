const mongoose = require('mongoose');
const config = require('config');

//collect from mongodb connect /connect your application
//mongoURI from default json which is connect your application file from mongo db
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected Successfully...........');
  } catch (err) {
    console.error(err.message);
    //exit process with failure

    process.exit(1);
  }
};
module.exports = connectDB;
