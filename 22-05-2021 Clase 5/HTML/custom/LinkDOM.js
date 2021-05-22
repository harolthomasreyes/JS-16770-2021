const AplicarDatosUsuarioAlDOM = (user) => {
  let etiquetasDOM = [
    "nombre",
    "descripcion",
    "carrera",
    "puesto",
    "direccion",
    "edad", //Puede o no estar con valores
    "hobbies", //Puede o no estar con valores
  ];

  etiquetasDOM.forEach((element) => {
    let elementDOM = document.getElementById(element);

    if (user[element]) {
      elementDOM.innerHTML = user[element];
      elementDOM.style.display = "";
    } else {
      elementDOM.style.display = "none";
    }
  });
};
