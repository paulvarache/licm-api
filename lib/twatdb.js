var location = process.env.TWATDB_HOME || __dirname + "/tdb";
var fs = require('fs');
var file = location + "/file.json";
var store = [];

if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "[]");
}

function TwatDB() {
    this.init();
}

TwatDB.prototype.init = function() {
    store = require(file);
}

TwatDB.prototype.add = function(element, callback) {
    store.push(element);
    fs.writeFile(file, JSON.stringify(store), callback);
}

TwatDB.prototype.update = function(id, newValue, callback) {
    store[id] = newValue;
    fs.writeFile(file, JSON.stringify(store), callback);
}

TwatDB.prototype.remove = function(id, callback) {
    store.splice(id, 1);
    fs.writeFile(file, JSON.stringify(store), callback);
}

TwatDB.prototype.get = function(id, callback) {
    callback(store[id]);
}

TwatDB.prototype.getAll = function(callback) {
    callback(store);
}

module.exports = TwatDB;
