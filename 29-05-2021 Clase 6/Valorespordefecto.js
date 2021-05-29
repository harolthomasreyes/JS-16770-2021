//Tenemos un obj literal persona
var persona = {
  nombre: "pepe",
  edad: 70,
  cuerpo: { altura: 1.8, peso: 200 },
};

//queremos asignar un valor por defecto si este no existe
var nomenclatura = persona.datosCatastrales?.nomenclatura || "sin datos..."; //undefined - null;
