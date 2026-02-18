export interface Product {
  id: number
  image: string
  name: string
  price: number
}

export interface ProductsResponse {
  total: number
  totalPages: number
  currentPage: number
  limit: number
  products: Product[]
}
