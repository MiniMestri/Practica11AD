function hora(){
    fecha = new Date()
    var año = fecha.getFullYear();
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();

    return ("Registro de sesión fehca: "+hora+":"+minuto+":"+segundo+"  "+dia+"/"+mes+"/"+año);
}
var archivos = require('fs');
var registro = hora();
    
archivos.appendFile("registro.txt",registro+'\n',function(err){
    if(err) throw err;
    console.log("OK")
})