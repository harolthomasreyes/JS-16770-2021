$(document).ready(function () {
  // Handler for .ready() called.
  $.getJSON("./Data/Datos.json", function (data) {
    var items = [];

    $.each(data, function (index, element) {
      let lista = `<li id='${index}-id'>" ${element.id} "</li>
      <li id='${index}-title'>" ${element.title} "</li>
      <li id='${index}-completed'>" ${element.completed} "</li>
      <li>----------------</li>`;

      items.push(lista);
    });

    let Atributos = {
      class: "my-new-list",
      html: items,
      id: "mylista",
      tittle: "mi lista de usuarios",
    };

    $("<ul/>", Atributos).appendTo("body");
  });
});
