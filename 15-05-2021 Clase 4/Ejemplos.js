/*****************************************************************/
// buscar propiedades dentro de uin objeto lioteral
var persona = {
  nombre: "harold",
  apellido: "reyes",
  edad: 31,
  hablar: function () {
    console.log(this.nombre);
  },
  atributos: { valocidad: 30, fuerza: 10 },
};

for (var propiedad in persona) {
  console.log(propiedad, persona[propiedad]);
}

/********************************************************************** */
//string interpolation
nombre +
  " " +
  edad +
  " " +
  direccion`su nombre es: ${nombre} su edad es: ${edad} la direccion es: ${direccion}`;
/********************************************************************** */
////Funcion para armar objeto literal
function Persona(nombre, apellido, edad) {
  this.Nombre = nombre;
  this.Apellido = apellido;
  this.Edad = edad;
  this.hablar = function () {
    console.log(this.Nombre);
  };
}
/********************************************************************** */
//clase
class PersonaClase {
  constructor(nombre, apellido, edad) {
    console.log("El constructor es lo primero que se ejecuta");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  hablar() {
    console.log(`${this.nombre} esta hablando`);
  }
}

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} esta hablando`);
  }
}
//como extender propiedades y metodos de una clase
class Leon extends Animal {
  constructor(nombre) {
    super(nombre); //Siempre usar super cuando necesitamos ejecutar el constructor de quiene extendemos
    this.tieneMelena = true;
  }

  atacar() {
    console.log(`${this.nombre} esta atacando`);
  }
}
/********************************************************************** */
//JSON and localstorage and sessionstorage

//Guardo datos
localStorage.setItem(
  "user",
  JSON.stringify({ username: "", islog: false, lastLogin: undefined })
);

//levanto datos
JSON.parse(localStorage.getItem("user"));
