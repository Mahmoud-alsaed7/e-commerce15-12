export interface address {
  results: number
  status: string
  data: data[]
}
export interface data {
  _id: string
  name?: string
  details: string
  phone: string
  city: string
}
