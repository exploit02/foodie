const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const citySchema = mongoose.Schema({
    name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('City', citySchema);