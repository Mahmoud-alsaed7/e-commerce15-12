"use server"

import { getusertoken } from "@/app/Helpers/getUserToken"


 export async function AddedToCartaction(productId:string){
     const token= await getusertoken()
  const response= await fetch("https://ecommerce.routemisr.com/api/v1/cart",{
        method:'POST',
        body:JSON.stringify({productId}),
        headers:{
            token: token!,
            'content-type':'application/json'
        }
      })
      const data = await response.json()
      return data
 }
