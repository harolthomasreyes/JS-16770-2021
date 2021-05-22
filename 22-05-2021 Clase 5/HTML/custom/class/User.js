class User {
  constructor(nombre, descripcion, carrera, puesto, direccion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.carrera = carrera;
    this.puesto = puesto;
    this.direccion = direccion;
    this.edad;
    this.hobbies;
  }

  CargarEdad(edad) {
    this.edad = edad;
  }

  CargarHobbies(hobbies) {
    this.hobbies = hobbies;
  }
}
