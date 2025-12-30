
// import { Brand } from "./brand"
// import { Category } from "./category"
// import { Subcategory } from "./subcategory"

import { Brand } from "./brand"
import { Category } from "./category"
import { Subcategory } from "./subcategory"

export interface order {
  results: number
  metadata: Metadata
  data: orderitems[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface orderitems {
  shippingAddress?: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: CartItem[]
  paidAt?: string
  createdAt: string
  updatedAt: string
  id: number
}

export interface ShippingAddress {
  details: string
  phone: string
  city: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone?: string
}

export interface CartItem {
  count: number
  _id: string
  product: Product
  price: number
}

export interface Product {
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

// export type Root = order[]

// export interface order {
//   shippingAddress?: ShippingAddress
//   taxPrice: number
//   shippingPrice: number
//   totalOrderPrice: number
//   paymentMethodType: string
//   isPaid: boolean
//   isDelivered: boolean
//   _id: string
//   user: User
//   cartItems: CartItem[]
//   createdAt: string
//   updatedAt: string
//   id: number
//   __v: number
//   paidAt?: string
// }
// export interface ShippingAddress {
//   details: string
//   city: string
//   phone?: string
//   postalCode?: string
// }

// export interface User {
//   _id: string
//   name: string
//   email: string
//   phone: string
// }

// export interface CartItem {
//   count: number
//   product: Product
//   price: number
//   _id: string
// }

// export interface Product {
//   subcategory: Subcategory[]
//   ratingsQuantity: number
//   _id: string
//   title: string
//   imageCover: string
//   category: Category
//   brand: Brand
//   ratingsAverage: number
//   id: string
// }





// export interface Root {
//   shippingAddress: ShippingAddress
//   taxPrice: number
//   shippingPrice: number
//   totalOrderPrice: number
//   paymentMethodType: string
//   isPaid: boolean
//   isDelivered: boolean
//   _id: string
//   user: User
//   cartItems: CartItem[]
//   paidAt: string
//   createdAt: string
//   updatedAt: string
//   id: number
// }

// export interface ShippingAddress {
//   details: string
//   phone: string
//   city: string
// }

// export interface User {
//   _id: string
//   name: string
//   email: string
//   phone: string
// }

// export interface CartItem {
//   count: number
//   _id: string
//   product: Product
//   price: number
// }

// export interface Product {
//   subcategory: Subcategory[]
//   ratingsQuantity: number
//   _id: string
//   title: string
//   imageCover: string
//   category: Category
//   brand: Brand
//   ratingsAverage: number
//   id: string
// }

