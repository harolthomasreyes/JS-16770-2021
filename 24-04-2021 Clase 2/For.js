for (var i = 0; i < 10; i++) {
  var numeroX = i + 1;
  var numeroDiv = 2;
  var EsDiv = numeroX % numeroDiv === 0;

  if (EsDiv) {
    console.log("El numero :" + numeroX + " es divisible por " + numeroDiv);
  }
}
