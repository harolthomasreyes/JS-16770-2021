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
