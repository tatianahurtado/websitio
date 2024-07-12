function calcular() 
{
     var nombre = document.getElementById("nombre").value;
     var diaNacimiento = document.getElementById("dia").value;
     var mesNacimiento = document.getElementById("mes").value;
     var anioNacimiento = document.getElementById("anio").value;
     var salida = document.getElementById("salida");
  
     
function calcularEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento) {
        this.nombre = nombre;
        this.dia= diaNacimiento;
        this.mes= mesNacimiento;
        this.year=anioNacimiento;
    
        this.edad= function (){
            var edad= 0; 
            var fecha= new Date();
            var dia= fecha.getDate();
            var AcFecha= fecha.getFullYear();
            var AcMes= fecha.getMonth()+1;
            if (AcMes < this.mes|| AcMes=== this.mes&&dia<this.dia){
                return edad = (AcFecha-this.year)-1;
            } else {
                return edad = AcFecha-this.year;
            }
          return edad;
        };
   
}
    var total = new calcularEdad(nombre, diaNacimiento, mesNacimiento, anioNacimiento);
    salida.innerHTML="La edad actual de "+ total.nombre +" es "+total.edad()+".";
}


function limpiar() {
  nombre=document.getElementById("nombre").value=" ";
  dia=document.getElementById("dia").value=" ";
  mes=document.getElementById("mes").value=" ";
  year=document.getElementById("anio").value=" ";
  salida.innerHTML="";
}