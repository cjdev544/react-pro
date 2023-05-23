export interface ProductCardProps {
  children?: JSX.Element | JSX.Element[]
  product: Product
}

interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContext {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Image: ({ img }: { img?: string | undefined }) => JSX.Element
  Title: ({ title }: { title?: string | undefined }) => JSX.Element
  Buttons: () => JSX.Element
}
