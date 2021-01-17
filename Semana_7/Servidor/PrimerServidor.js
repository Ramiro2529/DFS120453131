const http = require("http");

const fecha = require("./Fecha");

//post body passer
// get parameters
http.createServer(function(req, res) {

    res.writeHead(
        200, {
            'content-type': 'text/html'
        }
    );
    res.write("la fecha actual es: " + fecha.regresarFecha());

    res.end("Hola mundo! uwu");


}).listen("8090");
//request listener, response 
// sincrona ordenado pero lento 
//asincrona deordenadp