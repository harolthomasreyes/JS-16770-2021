const Init = () => {
  LoadDataBaseFromJSON();
  RenderProductList();
};

const LoadDataBaseFromJSON = () => {
  $.getJSON("../data/products.json", function (products) {
    let productJSON = ConvertToString(products);
    SetLocalStorage(LocalStorageGlobalVariables.All_Products, productJSON);
  });
};
