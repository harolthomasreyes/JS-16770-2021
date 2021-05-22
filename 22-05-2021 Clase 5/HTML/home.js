//1) creo mi usuario en el sistema -> De forma global!!!
var nuevoUsuario = new User(
  "Pedro",
  "Fanatico de la astrologia",
  "Abogado",
  "Heladero",
  "reconquista 700"
);

//2) aplico sus datos al DOM
AplicarDatosUsuarioAlDOM(nuevoUsuario);

function verEvento(e) {
  console.log(e);
}
