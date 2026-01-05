"use client"
import { getusertoken } from "@/app/Helpers/getUserToken";
import {  product, wishResponse } from "@/interfaces";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
      export  const wishlistcontext =createContext<{
        wishlistdata:wishResponse|null,
        isLoading :boolean,
        setwishlistdata:(value:wishResponse|null)=>void,
        setIsLoading:(value:boolean)=>void,
        getwishlist:()=>void,
        removeing:(value:string)=>Promise<wishResponse>,
        removeingid:null|string
        }>({
            wishlistdata:null,
            isLoading:false,
            setwishlistdata:()=>{},
            setIsLoading:()=>{},
            getwishlist:()=>{},
            removeing: async (value: string): Promise<wishResponse> => {return {} as wishResponse},
            removeingid:null
        })
       export default function WishlistcontextProvider({children} :{children:ReactNode} ) {     
               const[wishlistdata,setwishlistdata] = useState<wishResponse|null>(null)
               const[removeingid,setremoveingid]=  useState<null|string>(null)

               const[isLoading,setIsLoading] = useState(false)
       async function getwishlist(){
        setIsLoading(true)
         const response= await  fetch('/api/get-wishlist')
         const data = await response.json()
         console.log(data);
            setwishlistdata(data);
            setIsLoading(false);
          }
            async function removeing( productid:string ){ 
          const token= await getusertoken()
          setremoveingid(productid)      
        const response= await fetch('https://ecommerce.routemisr.com/api/v1/wishlist/'+productid,{
              method:'DELETE',
              headers:{
                token:token!
              }
            })
            const  data:wishResponse = await response.json()
            if(data.status=="success"){
              getwishlist()
            }           
            setremoveingid(null)
            console.log(token);   
             return data
         }
       useEffect(()=>{
        getwishlist()
       },[])
           return <wishlistcontext.Provider value={{wishlistdata,isLoading,setwishlistdata,setIsLoading,getwishlist,removeing,removeingid}}>
             {children}
           </wishlistcontext.Provider>
       }