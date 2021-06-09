const RenderProductList = () => {
  //Primero limpiamos todo la seccion del render
  $("#productSeccion").html("");

  //Obtengo los productos de mi Dase de datos
  let productsText = GetLocalStorageItem(
    LocalStorageGlobalVariables.All_Products
  );

  //los convierto a objeto literal
  let productsJSON = ConvertToJSON(productsText);

  //recorremos el JSON y armamos nuestro HTML
  let productsToRender = [];
  $.each(productsJSON, function (key, product) {
    productsToRender.push(ProductCard(product));
  });

  //renderizo en mi web
  $("#productSeccion").html(productsToRender);
};
