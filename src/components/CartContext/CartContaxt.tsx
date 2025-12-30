"use client"
import { cartResponse } from "@/interfaces";
import { createContext, ReactNode, useEffect, useState } from "react";
      
      export  const CartContext =createContext<{
        cartdata:cartResponse|null,
        IsLoading :boolean,
        setcartdata:(value:cartResponse|null)=>void,
        setIsLoading:(value:boolean)=>void,
        getcart:()=>void,
        userid:string|null
        }>({
            cartdata:null,
            IsLoading:false,
            setcartdata:()=>{},
            setIsLoading:()=>{},
            getcart:()=>{},
            userid:null,
        })
       export default function CartContextProvider({children} :{children:ReactNode} ) {
               const[cartdata,setcartdata] = useState<cartResponse|null>(null)
               const[IsLoading,setIsLoading] = useState(false)
               const[userid,setuserid] = useState<string|null>(null)

       async function getcart(){
        setIsLoading(true)
        //  const response= await  fetch('http://localhost:3000/api/get-cart')
         const response= await  fetch('/api/get-cart')
         const data = await response.json()
         console.log(data);
            setcartdata(data);
            setIsLoading(false);
          }
          useEffect(() => {
          if (cartdata?.data?.cartOwner) {
          setuserid(cartdata.data.cartOwner)
           console.log(userid);
          }
          }, [cartdata])
          useEffect(() => {
    if (userid) {
      console.log("userid is now:", userid);
    }
  }, [userid]);

       useEffect(()=>{
        getcart()
       },[])
           return <CartContext.Provider value={{cartdata,IsLoading,setcartdata,setIsLoading,getcart,userid}}>
             {children}
           </CartContext.Provider>

       }