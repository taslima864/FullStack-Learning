import Product from "./product";

function ProductTab() {
  return(
    <>
    <Product title="phone" price={30000}/>
    <Product title="speaker" />
    <Product title="laptop" price={80000}/>
    </>
  )
}

export default ProductTab