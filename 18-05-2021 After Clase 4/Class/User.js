class User {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    this.IsAlive = true;
  }

  agregarProduct = (id) => {
    console.log(`se agrego el prod: ${id} al carrito`);
  };

  decirNombre = () =>
    function () {
      console.log(`mi nombre es: ${this.nombre}`);
    };
}
