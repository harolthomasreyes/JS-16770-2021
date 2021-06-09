class CartManagerClass {
  constructor(prod) {
    this.id = prod.id;
    this.name = prod.name;
    this.quantity = prod.quantity;
    this.price = prod.price;

    if (prod.discount) {
      //si existe
      if (prod.discount.discount) this.price -= prod.discount.discount;
      else if (prod.discount.porcentageDiscount)
        this.price -= (prod.discount.porcentageDiscount * this.price) / 100;
    }
  }
}
