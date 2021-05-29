//Tenemos un obj literal persona
var persona = {
  nombre: "pepe",
  edad: 70,
  cuerpo: { altura: 1.8, peso: 200 },
};

//Si intentamos buscar su altura la vamos a encontrar
console.log(persona.cuerpo.altura);
//Si intentamos buscar cualquier propiedad que no exista, va a dar error
console.log(persona.datosCatastrales.nomenclatura); // <= error
//Como podemos evitar esto?
//El simbolo de '?' al finalizar el objeto literal indica que solo continue si existe tal objeto
console.log(persona?.datosCatastrales?.nomenclatura); // <= undefined
/*-----------------^-----------------^..................*/
