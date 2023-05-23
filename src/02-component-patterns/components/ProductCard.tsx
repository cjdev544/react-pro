import ProductContext from '../context/ProductContext'
import useProduct from '../hooks/useProduct'
import { ProductCardProps } from '../interfaces/products'
import styles from '../styles/styles.module.css'

export function ProductCard({ children, product }: ProductCardProps) {
  const { counter, increaseBy } = useProduct()

  return (
    <ProductContext.Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </ProductContext.Provider>
  )
}
