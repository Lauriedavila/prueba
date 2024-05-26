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

let animales = ["perro", "gato", "Conejo"];
console.log(animales);
console.log(animales[0]);
console.log(animales[2]);
console.log("cantidad de animales:", animales.length);
for(let i = 0; i< animales.length; i++){
console.log(animales[i])
}

function obtenerBebida(menu) {
    switch(menu.toLowerCase()) { 
        case 'carne':
            return 'vino tinto';
        case 'pescado':
            return 'vino blanco';
        case 'verdura':
            return 'agua';
        default:
            return 'Elija carne, pescado o verdura';
    }
}

// Array para almacenar los pedidos
let pedidos = [];

// Función para agregar un pedido
function agregarPedido(menu) {
    let bebida = obtenerBebida(menu);
    if (bebida === 'Elija carne, pescado o verdura') {
        console.log(bebida); // Mensaje de error
    } else {
        pedidos.push({ menu: menu, bebida: bebida });
        console.log(`Pedido agregado: ${menu} con ${bebida}`);
    }
}

// Ejemplos de uso
agregarPedido('carne');    // Agrega un pedido de carne
agregarPedido('pescado');  // Agrega un pedido de pescado
agregarPedido('verdura');  // Agrega un pedido de verdura
agregarPedido('pollo');    // Mensaje de error

// Imprimir todos los pedidos
console.log(pedidos);


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

let resultado2;
let numero1 = 3;
let numero2 = 5;
function sumaymuestra() {
    resultado2 = numero1 + numero2;
    alert("El resultado2 es " + resultado2);
    
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