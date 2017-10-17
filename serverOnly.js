var http = require('http')
var fs = require('fs')

var server =http.createServer(function(req,res){
	switch(req.url){
		case "/boletin-1":
			res.writeHead(200, {'Content-Type': 'text/html'})
			var myReadStream = fs.createReadStream(__dirname + '/index1.html')
			myReadStream.pipe(res)
			break;
		case "/boletin-2":
			res.writeHead(200, {'Content-Type': 'text/html'})
			var myReadStream = fs.createReadStream(__dirname + '/index2.html')
			myReadStream.pipe(res)
			break;
		case "/":
			res.writeHead(200, {'Content-Type': 'text/html'})
			var myReadStream = fs.createReadStream(__dirname + '/index.html')
			myReadStream.pipe(res)
	}
})

server.listen(8080,'127.0.0.1')
console.log('currently listening to port 8080')
