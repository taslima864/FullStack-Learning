import Product from "./product";

function ProductTab() {
  let options = [<li>hi-tech</li>, <li>durable</li>, <li>fast</li>];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="phone"
        price={30000}
        features={options}
      />
      <Product title="speaker" />
      <Product title="laptop" price={80000} />
    </>
  );
}

export default ProductTab;
