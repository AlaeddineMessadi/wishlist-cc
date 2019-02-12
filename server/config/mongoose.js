const mongoose = require('mongoose');
const CONFIG = require('../vars');

if (CONFIG.db_host != '') {
  mongoose.Promise = global.Promise; //set mongo up to use promises


  const mongo_location = 'mongodb://' + CONFIG.db_host + ':' + CONFIG.db_port;

  mongoose.connect(mongo_location).catch((err) => {
    console.log('*** Can Not Connect to Mongo Server:', mongo_location)
  })

  let db = mongoose.connection;

  module.exports = db;
  db.once('open', () => {
    console.log('Connected to mongo at ' + mongo_location);
  })
  db.on('error', (error) => {
    console.log("error", error);
  })
  // End of Mongoose Setup

} else {
  console.log("No Mongo Credentials Given");
}