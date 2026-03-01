import "./Product.css";

function Product({ title, price , features }) {
  const list = features.map((feature) => <li>{feature}</li>)
  return (
    <div className="Product">
      <h1>{title}</h1>
      <h5>Price: {price}</h5>
      <h3>Product Description</h3>
      <p>{list}</p>
    </div>
  );
}

export default Product;
