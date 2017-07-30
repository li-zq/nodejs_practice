var mongoose = require('mongoose');
var mongotest = require('./mongotest.js');
var mongotest1 = mongoose.model('mongotest1', mongotest);


module.exports = mongotest1;