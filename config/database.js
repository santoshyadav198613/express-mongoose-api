const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/expressApiDemo';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;