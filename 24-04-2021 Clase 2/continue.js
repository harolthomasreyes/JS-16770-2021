var numeroDiv = 3;

for (var i = 0; i < 10; i++) {
  var numero = i + 1;
  var esDiv = numero % numeroDiv === 0;

  if (esDiv) {
    console.log("el numero " + numero + " es divisile entre " + numeroDiv);
    continue; //ignora el resto del codigo y empieza el for en el siguiente paso
  }

  console.log(numero);
}
