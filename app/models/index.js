const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.people = require("./people.model.js")(mongoose);
db.ship = require("./ship.model.js")(mongoose);

module.exports = db;
