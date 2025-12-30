"use client"
import { getusertoken } from "@/app/Helpers/getUserToken";
import { address} from "@/interfaces";
import { createContext, ReactNode, useEffect, useState } from "react";

      export  const AddressContext =createContext<{
        addressdata:address|null,
        IsLoading :boolean,
        setaddressdata:(value:address|null)=>void,
        setIsLoading:(value:boolean)=>void,
        getaddress:()=>void
        }>({
            addressdata:null,
            IsLoading:false,
            setaddressdata:()=>{},
            setIsLoading:()=>{},
            getaddress:()=>{},
        })
       export default function AddressContextProvider({children} :{children:ReactNode} ) {
               const[addressdata,setaddressdata] = useState<address|null>(null)
               const[IsLoading,setIsLoading] = useState(false)
       async function getaddress(){
        setIsLoading(true)
         const token= await getusertoken()
              const response = await fetch("https://ecommerce.routemisr.com/api/v1/addresses",{
                headers:{
                  token:token!
                }
              })
              const data:address = await response.json() 
            setaddressdata(data);
            console.log(token);
            setIsLoading(false);
          }
       useEffect(()=>{
        getaddress()
       },[])
           return <AddressContext.Provider value={{addressdata,IsLoading,setaddressdata,setIsLoading,getaddress}}>
             {children}
           </AddressContext.Provider>

       }