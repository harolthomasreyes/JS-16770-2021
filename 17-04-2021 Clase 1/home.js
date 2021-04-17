// const welcomeMsg = "Bienvenido :";
// let nombre = prompt("Ingresa tu nombre:");
// alert(welcomeMsg + nombre);

//Capturo datos ingresados por el usuario
const n1 = prompt("Ingresa numero 1:");
const n2 = prompt("Ingresa numero 2:");

//Codigo que concatena porque el prompt solo captura texto
//alert(n1 + n2);

//Convierto los datos a tipo numerico
const n1TipoDatoNumero = parseFloat(n1);
const n2TipoDatoNumero = parseFloat(n2);

//Sumo el resultado
const resultado = n1TipoDatoNumero + n2TipoDatoNumero;

//muestro el resultado
console.log("El resultado de la suma es:" + resultado);

/*
Tipo de operaciones
*/
console.log("Son iguales? " + (1 == 1));
console.log("Son distintos? " + (1 != 2));
console.log("Son iguales incluso en su tipo? " + (1 === "1"));
console.log("Son distintos incluso en su tipo? " + (1 === "2"));
console.log("A es mayor a B? " + (10 > 5));
console.log("A es mayor o igual a B? " + (10 >= 5));
console.log("A es menor a B? " + (10 < 5));
console.log("A es menor o igual a B? " + (10 <= 5));

//Maestro
const orden = "honey";

let ipa = "ipa" == orden;
let honey = "honey" == orden;
let black = "black" == orden;

if (condicion1 || condicion2 || condicion3) {
  console.log("Sale birra");
}
