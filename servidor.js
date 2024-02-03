var servidor = require('http');
var archivos = require('fs');
servidor.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'})
   
   switch(req.url){
        case "/":
            archivos.readFile('home.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/blog":
            archivos.readFile('blog.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/tienda":
            archivos.readFile('tienda.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        case "/contacto":
            archivos.readFile('contacto.html',function(err,data){
                res.write(data)
                res.end("")
            });
            break;
        default:
            res.end("<h1>ERROR 404<h1>");
    } 
    
    
}).listen(8080)