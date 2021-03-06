var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var util = require('../../client/js/util/util.js');


exports.User = mongoose.model("User",new Schema({
    google_id: String,
    name: String,
    email: String,
    creationDate: Date,
    lastLoginDate: Date,
    isAdmin: Boolean
}));
