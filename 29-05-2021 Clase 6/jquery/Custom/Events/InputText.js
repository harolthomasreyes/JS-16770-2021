$(".txtNumerico").keypress(function (event) {
  console.log(event.key);

  if (!(event.keyCode >= 48 && event.keyCode <= 57)) event.preventDefault();
});
