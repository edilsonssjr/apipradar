var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var reportsSchema = new Schema({
    name        : String,
    type        : String,
    latitude    : Number,
    longitude   : Number,
    author      : String,
    date        : { type: Date, default: Date.now }    
});


var Report = mongoose.model('reports', reportsSchema);

module.exports = Report;