import { getusertoken } from "@/app/Helpers/getUserToken"
import { cartResponse } from "@/interfaces"

import { NextResponse } from "next/server"

 export  async function GET() {
    const token= await getusertoken()
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
                   headers:{
                       token:token!
                    }
                })
                const data:cartResponse = await response.json()
             return NextResponse.json(data)
}