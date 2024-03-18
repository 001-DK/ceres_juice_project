import React from "react";

function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        <div className="product">
          <img src="/path/to/product1.jpg" alt="Product 1 Pic" />
          <h3>Product 1</h3>
          <p>Description of Product 1</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img src="/path/to/product2.jpg" alt="Product 2 Pic" />
          <h3>Product 2</h3>
          <p>Description of Product 2</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img src="/path/to/product2.jpg" alt="Product 3 Pic" />
          <h3>Product 3</h3>
          <p>Description of Product 3</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
