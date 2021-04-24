var dolares = prompt("Ingresa los dolares a cambiar:");

var minimoDeCambio = 100;

var puedeCambiar = parseInt(dolares) >= minimoDeCambio;

if (!puedeCambiar) {
  alert("no cumples con el minimo");
}
