console.log("localStorage", localStorage);

function LimpiarLocalStorage() {
  console.log("localStorage antes", localStorage);
  localStorage.clear();
  console.log("localStorage despues ", localStorage);
}

function CrearUsuario() {
  var nombre = prompt("Ingresa tu nombre:");
  var email = prompt("Ingresa tu email:");
  //convertimos el objeto literal en una clase
  // var userInfo = {
  //   nombre: nombre,
  //   email: email,
  //   agregarProduct: function (id) {
  //     console.log(`se agrego el prod: ${id} al carrito`);
  //   },
  // };
  //Esta es la clase final del usuario
  var nuevoUsuario = new User(nombre, email);

  GuardarUsusarioResgistrado(nuevoUsuario);
}
