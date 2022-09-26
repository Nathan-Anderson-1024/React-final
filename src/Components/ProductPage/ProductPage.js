import ProductList from '../ProductList/ProductList'

export default function ProductPage(props) {
  return (
    <>
        <ProductList products={props.products} />
    </>
  )
}
