const Login = (e) => {
  e.preventDefault(); //cancelar eventos
  console.log(e);
};

const ControlarCantidad = (evento) => {
  if (!(evento.keyCode >= 48 && evento.keyCode <= 57)) evento.preventDefault();

  console.log(evento);
};
