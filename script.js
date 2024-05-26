// let nombre = "Pedro";
// let years = 30;
// console.log(years + " " + nombre);
// let numberone=120;
// let numbertwo=20;
// let resultsuma = numberone + numbertwo;
// let resultresta = numberone - numbertwo;
// let resultmulti = numberone * numbertwo;
// let resultdivision = numberone / numbertwo;
// console.log("suma:",resultsuma);
// console.log("Resta:",resultresta);
// console.log("Multiplicación:",resultmulti);
// console.log("División:",resultdivision);

// let nombre2 = "Laura";
// let apellido = "Dávila";
// console.log(nombre2+" "+apellido);

// let numberthree=129;let numberfour= 19
// let suma2 = numberthree + numberfour;
// console.log("suma2:",suma2);
// let numberfive = suma2 + 38;
// console.log("variable:",numberfive);

// let nota = 3;
// if (nota < 4) {
//     console.log("aplazado");
// } else if (nota < 7) {
//     console.log("desaprobado");
// } else if (nota < 9) {
//     console.log("aprobado");
// } else {
//     console.log("sobresaliente");
// }

// let nombres = ["Diego", "Anabel", "Esteban"];
// console.log(nombres);
// console.log(nombres[0]);
// console.log(nombres[2]);
// console.log("cantidad de nombres:", nombres.length);
// for(let i = 0; i< nombres.length; i++){
//     console.log(nombres[i])
// }

let topping ="Oreo";
let precio = 0;
let precioFinal = 0;
let helado = 200; 
 
if(topping == "Oreo") {
    precio = 10;
} else if(topping == "Kitkat") {
    precio = 15;
} else if(topping == "Kinder") {
    precio = 25;
}
else {
    console.log("No tenemos este topping");
}
precioFinal = helado + precio;
console.log("El helado cuesta $" + precioFinal)

    // Declarar variables
let num = 1;  // Número inicial
let sum = 0;    // Variable para almacenar la suma

// Bucle while
while (num <= 10) {
  sum += num;  // Sumar el valor actual de 'numero' a 'suma'
  num++;        // Incrementar 'numero' en 1
}

// Mostrar el resultado
console.log("La suma de los números del 1 al 10 es: " + sum);

let resultado;
let numero1 = 3;
let numero2 = 5;
function sumaymuestra() {
    resultado = numero1 + numero2;
    alert("El resultado es " + resultado);
    
}
sumaymuestra();

// Solicita al usuario que introduzca un número entero
let numero4 = prompt("Introduce un número entero");

// Llama a la función parImpar y guarda el resultado
let result = parImpar(numero4);

// Muestra el resultado en una alerta
alert("El número4 " + numero4 + " es " + result);

// Define la función parImpar
function parImpar(numero4) {
  if (numero4 % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let nombre5 = prompt('Ingrese su nombre');
function saludo() { 
    if (nombre5) {
        alert('Bienvenido' + nombre5);
            } else {
                alert('Debe ingresar un nombre')
            }
}
saludo();