const ProductCard = (product) => `<div class="card" id=${
  "card-product-" + product.id
} style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Stock: ${
            product.quantity
          }</h6>
          <p class="card-text">Precio: ${product.price} 
          ${
            product?.discount && product?.discount?.discount
              ? "$" + product?.discount?.discount
              : "%" + product?.discount?.porcentageDiscount
          }</p>
          <a onclick="AddProduct(${
            product.id
          })" class="btn btn-primary">Agregar al carrito</a>
          
        </div>
      </div>`;
