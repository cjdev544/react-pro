import { useContext } from 'react'

import ProductContext from '../context/ProductContext'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export function ProductImage({ img }: { img?: string }) {
  const { product } = useContext(ProductContext)

  let imgToShow: string = noImage

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  }

  return (
    <img
      className={styles.productImg}
      src={imgToShow}
      alt='Imagen por defecto si no hay imagen'
    />
  )
}
