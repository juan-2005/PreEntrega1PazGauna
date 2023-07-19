

alert("Bienvenidos a Banco Conversion AR");
let entrada = prompt ("Ingresar nombre");
let salida = entrada + "" ;
alert(salida)


let number;
if (number=""){
alert("No puede realizar conversion");
}
else{
alert(" Puede realizar conversion");
}


let cantidad = Number (prompt("Ingrese cantidad de dinero a convertir"));

for (let i = 1; i <= 10; i++){
    let resultado = cantidad*i;
    alert(cantidad + "Peso/s" + "X" + i + "Dolar/es" +" = " + resultado + "Dolar/es");
}


function cierre (){
    let entrada;
    alert( salida + "ya no requiere de nuestros servicios");
}
cierre();




