import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components'

const product = {
  id: '1',
  title: 'Café con leche',
  //img: './coffee-mug.png',
}

export default function ShoppingPage() {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <ProductCard product={product}>
          <ProductImage img='./coffee-mug.png' />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title='Otro café' />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
