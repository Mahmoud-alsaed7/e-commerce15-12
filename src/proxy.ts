import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

const protectedpage = ['/cart','/profile','/allorders','/wishlist']
const authpage = ['/login','/register','/recetcode','/resetpassword','/forgetpassword']

 export default  async function proxy(req:NextRequest){
     const token = await getToken({req})
     if(protectedpage.includes(req.nextUrl.pathname)){
          if(token){
            return NextResponse.next()
          }else{
              const redirecturl= new URL('/login',process.env.NEXT_URL)  
        return  NextResponse.redirect(redirecturl)
          }
     }
     if(authpage.includes(req.nextUrl.pathname)){
          if(!token){
            return NextResponse.next()
          }else{
              const redirecturl= new URL('/',process.env.NEXT_URL)  
        return  NextResponse.redirect(redirecturl)
          }
     }
     return NextResponse.next()
 }

