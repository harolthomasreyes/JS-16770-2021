const AddProduct = (idProduct) => {
  //Obtengo los productos de mi Dase de datos
  let productsText = GetLocalStorageItem(
    LocalStorageGlobalVariables.All_Products
  );

  //los convierto a objeto literal
  let productsJSON = ConvertToJSON(productsText);

  //buscamos el producto para disminuir su stock
  let productIndexToUpdate = productsJSON.findIndex((p) => p.id == idProduct);
  productsJSON[productIndexToUpdate].quantity -= 1;

  //Guardamos el json ya actualziado
  productsText = ConvertToString(productsJSON);
  SetLocalStorage(LocalStorageGlobalVariables.All_Products, productsText);

  //volvemos a renderizar en nuestra tienda los productos
  RenderProductList();

  //guardamos el producto en nuesto carrito => si existe stock
  let productoToCart = productsJSON.find((p) => p.id == idProduct); //lista de procuto ya actualziada de antes
  //creamos un nuevo formato de producto con los descuentos aplicados y listos para ir al carrito
  let newFormatForProduct = new CartManagerClass(productoToCart);
};
