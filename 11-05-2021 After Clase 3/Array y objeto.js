//Consulta nombre, peso y altura.
var bebe = {
  nombre: "bebe",
  peso: 4,
  altura: 35,
  calcularIMC: function () {
    //Realiza el calculo del IMC y el número con un solo decimal.
    var calculoIMC = this.peso / ((this.altura / 100) * (this.altura / 100));
    var IMC = calculoIMC.toFixed(1);

    //Según el IMC obtenido arroja un resultado.

    if (IMC < 18.5) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es inferior al normal."
      );
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es normal."
      );
    } else if (IMC >= 25.0 && IMC <= 29.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es superior al normal."
      );
    } else if (IMC >= 30.0) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nUsted tiene sobrepeso."
      );
    }
  },
};

//Consulta nombre, peso y altura.
var niña = {
  nombre: "niña",
  peso: 10,
  altura: 70,
  calcularIMC: function () {
    //Realiza el calculo del IMC y el número con un solo decimal.
    var calculoIMC = this.peso / ((this.altura / 100) * (this.altura / 100));
    var IMC = calculoIMC.toFixed(1);

    //Según el IMC obtenido arroja un resultado.

    if (IMC < 18.5) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es inferior al normal."
      );
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es normal."
      );
    } else if (IMC >= 25.0 && IMC <= 29.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es superior al normal."
      );
    } else if (IMC >= 30.0) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nUsted tiene sobrepeso."
      );
    }
  },
};

//Consulta nombre, peso y altura.
var adolecente = {
  nombre: "adolecente",
  peso: 40,
  altura: 120,
  calcularIMC: function () {
    //Realiza el calculo del IMC y el número con un solo decimal.
    var calculoIMC = this.peso / ((this.altura / 100) * (this.altura / 100));
    var IMC = calculoIMC.toFixed(1);

    //Según el IMC obtenido arroja un resultado.

    if (IMC < 18.5) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es inferior al normal."
      );
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es normal."
      );
    } else if (IMC >= 25.0 && IMC <= 29.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es superior al normal."
      );
    } else if (IMC >= 30.0) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nUsted tiene sobrepeso."
      );
    }
  },
};

//Consulta nombre, peso y altura.
var adulto = {
  nombre: "adulto",
  peso: 70,
  altura: 170,
  calcularIMC: function () {
    //Realiza el calculo del IMC y el número con un solo decimal.
    var calculoIMC = this.peso / ((this.altura / 100) * (this.altura / 100));
    var IMC = calculoIMC.toFixed(1);

    //Según el IMC obtenido arroja un resultado.

    if (IMC < 18.5) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es inferior al normal."
      );
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es normal."
      );
    } else if (IMC >= 25.0 && IMC <= 29.9) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nEl peso es superior al normal."
      );
    } else if (IMC >= 30.0) {
      alert(
        this.nombre +
          " " +
          "tu indice de masa corporal es " +
          IMC +
          "\nUsted tiene sobrepeso."
      );
    }
  },
};

var personasACalcularIMC = [bebe, niña, adolecente];
personasACalcularIMC.push(adulto);

for (var i = 0; i < personasACalcularIMC.length; i++) {
  personasACalcularIMC[i].calcularIMC();
}
