import { getusertoken } from "@/app/Helpers/getUserToken"
import {wishResponse } from "@/interfaces"

import { NextResponse } from "next/server"

 export  async function GET() {
    const token= await getusertoken()
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
                   headers:{
                       token:token!
                    }
                })
                const data:wishResponse = await response.json()
             return NextResponse.json(data)
}