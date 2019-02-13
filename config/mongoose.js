const mongoose = require('mongoose');
const CONFIG = require('./vars');

if (CONFIG.db_host != '') {
  mongoose.Promise = Promise; //set mongo up to use promises

  // print mongoose logs in dev env
  if (CONFIG.app === 'dev') {
    mongoose.set('debug', true);
  }

  console.log(CONFIG)
  const mongo_location = 'mongodb://' + CONFIG.db_host + ':' + CONFIG.db_port + '/' + CONFIG.db_name;

  console.log(mongo_location)

  let db = mongoose.connection;
  db.once('open', () => {
    console.log('Connected to mongo at ' + mongo_location);
  })
  db.on('error', (error) => {
    console.log("MongoDB connection error: ", error);
  })
  // End of Mongoose Setup

  /**
  * Connect to mongo db
  *
  * @returns {object} Mongoose connection
  * @public
  */
  exports.connect = () => {
    mongoose.connect(mongo_location, {
      keepAlive: 1,
      useNewUrlParser: true,
    });
    return mongoose.connection;
  };

} else {
  console.log("No Mongo Credentials Given");
}