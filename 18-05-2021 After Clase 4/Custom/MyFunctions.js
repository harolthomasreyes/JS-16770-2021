function GuardarUsusarioResgistrado(nuevoUsuario) {
  //Cargar los usuarios existentes
  var obtenemosTodosLosUsuariosAnteriores = JSON.parse(
    localStorage.getItem("users")
  );

  if (!obtenemosTodosLosUsuariosAnteriores) {
    obtenemosTodosLosUsuariosAnteriores = [];
  }

  //Agrego el nuevo registro
  obtenemosTodosLosUsuariosAnteriores.push(nuevoUsuario);
  //Formateo para persistir la informacion
  var nuevoUsuarioJSON = JSON.stringify(obtenemosTodosLosUsuariosAnteriores);
  //guardo
  localStorage.setItem("users", nuevoUsuarioJSON);
}
