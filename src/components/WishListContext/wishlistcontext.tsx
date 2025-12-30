"use client"
import {  wishResponse } from "@/interfaces";
import { createContext, ReactNode, useEffect, useState } from "react";
      export  const wishlistcontext =createContext<{
        wishlistdata:wishResponse|null,
        isLoading :boolean,
        setwishlistdata:(value:wishResponse|null)=>void,
        setIsLoading:(value:boolean)=>void,
        getwishlist:()=>void,
        }>({
            wishlistdata:null,
            isLoading:false,
            setwishlistdata:()=>{},
            setIsLoading:()=>{},
            getwishlist:()=>{},
        })
       export default function WishlistcontextProvider({children} :{children:ReactNode} ) {     
               const[wishlistdata,setwishlistdata] = useState<wishResponse|null>(null)
               const[isLoading,setIsLoading] = useState(false)
       async function getwishlist(){
        setIsLoading(true)
        //  const response= await  fetch('http://localhost:3000/api/get-wishlist')
         const response= await  fetch('/api/get-wishlist')
         const data = await response.json()
         console.log(data);
            setwishlistdata(data);
            setIsLoading(false);
          }
       useEffect(()=>{
        getwishlist()
       },[])
           return <wishlistcontext.Provider value={{wishlistdata,isLoading,setwishlistdata,setIsLoading,getwishlist}}>
             {children}
           </wishlistcontext.Provider>
       }