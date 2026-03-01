import Product from "./product";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="phone"
        price={30000}
        features={{a:"hi-tech"}}
      />
      <Product title="speaker" />
      <Product title="laptop" price={80000} />
    </>
  );
}

export default ProductTab;
