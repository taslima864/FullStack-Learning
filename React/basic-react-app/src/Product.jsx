import "./Product.css";

function Product({title, price=4000}) {
  return  (
    <div className="Product">
      <h1>{title}</h1>
      <h5>Price: {price}</h5>
      <h3>Product Description</h3>
    </div>
  );
}

export default Product;