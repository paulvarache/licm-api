var restify = require('restify');
var route = require('./routes/index');

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());
route(server);

module.exports = server;
