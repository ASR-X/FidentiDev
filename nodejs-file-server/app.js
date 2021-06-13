var SocketIOFileUploadServer = require("./server"),
	
	express = require("express");

var app;
var cors = require('cors')

app = express()
	.use(SocketIOFileUploadServer.router)
	.use(express.static(__dirname + "/out"))
	.use(express.static(__dirname + "/public_html"))
	.use(cors())

const server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(4567);

console.log("Listening on port 4567");

io.sockets.on("connection", socket => {
	console.log("connected", socket.id)
	var siofuServer = new SocketIOFileUploadServer();
	siofuServer.on("saved", function(event){
		console.log(event.file);
		event.file.clientDetail.base = event.file.base;
		io.sockets.emit("response", "test")
	});
	siofuServer.on("error", function(data){
		console.log("Error: "+data.memo);
		console.log(data.error);
	});
	siofuServer.on("start", function(event){
		if (/\.exe$/.test(event.file.name)) {
			console.log("Aborting: " + event.file.id);
			siofuServer.abort(event.file.id, socket);
		}
	});
	siofuServer.dir = "uploads";
	siofuServer.listen(socket);
});
