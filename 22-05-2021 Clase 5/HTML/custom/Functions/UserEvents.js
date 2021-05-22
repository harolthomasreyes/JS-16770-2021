const CargarEdadEvent = (user) => {
  user.CargarEdad(70);

  AplicarDatosUsuarioAlDOM(user);
};

const CargarHobbies = (user) => {
  console.log(e);
  let elementDOM = document.getElementById("txtHobbies");

  user.CargarHobbies(elementDOM.value);

  AplicarDatosUsuarioAlDOM(user);
};
