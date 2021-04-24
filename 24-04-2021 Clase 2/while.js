var Alive = true;

while (Alive) {
  var operacion = prompt("Que operacion deseas realizar?");
  var n1;
  var n2;
  var EsSuma = operacion === "suma";
  var EsResta = operacion === "resta";
  var EsMultiplicacion = operacion === "multiplicacion";
  var EsDivision = operacion === "division";

  if (EsSuma || EsResta || EsMultiplicacion || EsDivision) {
    n1 = parseFloat(prompt("Ingresa el numero A?"));
    n2 = parseFloat(prompt("Ingresa el numero B?"));
  }

  if (operacion == "ESC") Alive = false;

  switch (operacion) {
    case "suma":
      console.log(n1 + n2);
      break;
    case "resta":
      console.log(n1 - n2);
      break;
    case "multiplicacion":
      console.log(n1 * n2);
      break;
    case "division":
      console.log(n1 / n2);
      break;
    default:
      console.log("No se encuentra en el listado de operaciones");
      break;
  }

  //   if (EsSuma) {
  //     console.log(n1 + n2);
  //   } else if (EsResta) {
  //     console.log(n1 - n2);
  //   } else if (EsMultiplicacion) {
  //     console.log(n1 * n2);
  //   } else if (EsDivision) {
  //     console.log(n1 / n2);
  //   } else {
  //     //Algo en el caso que no sea una operacion en la lista
  //   }

  //   if (EsSuma) {
  //     console.log(n1 + n2);
  //   }
  //   if (EsResta) {
  //     console.log(n1 - n2);
  //   }
  //   if (EsMultiplicacion) {
  //     console.log(n1 * n2);
  //   }
  //   if (EsDivision) {
  //     console.log(n1 / n2);
  //   }
}
