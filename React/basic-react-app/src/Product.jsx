import "./Product.css";

function Product({ title, price , features, features2 }) {
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h5>Price: {price}</h5>
      <h3>Product Description</h3>
      <p>{features}</p>
      <p>{features2.a}</p>
    </div>
  );
}

export default Product;
