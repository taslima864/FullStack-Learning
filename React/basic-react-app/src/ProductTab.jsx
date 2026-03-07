import Product from "./product";

function ProductTab() {
  let options = ["hi-tech","durable","fast"];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="phone"
        price={30000}
      />
      <Product title="laptop" price={80000} />
      <Product title="pen"  price={1}/>
    </>
  );
}

export default ProductTab;
