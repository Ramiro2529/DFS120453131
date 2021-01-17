const http = require("http");



//post body passer
// get parameters
http.createServer(function(req, res) {

    res.writeHead(
        200, {
            'content-type': 'text/html'
        }
    );

    res.end("Hola mundo! uwu");


}).listen("3000");
//request listener, response 
// sincrona ordenado pero lento 
//asincrona deordenadp