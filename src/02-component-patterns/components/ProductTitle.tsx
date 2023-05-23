import { useContext } from 'react'

import ProductContext from '../context/ProductContext'
import styles from '../styles/styles.module.css'

export function ProductTitle({ title }: { title?: string }) {
  const { product } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}
