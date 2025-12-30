"use client"
import { getusertoken } from "@/app/Helpers/getUserToken"
import Loading from "@/app/loading"
import { Button } from "@/components/ui/button"
import { wishlistcontext } from "@/components/WishListContext/wishlistcontext"
import { wishResponse } from "@/interfaces"
import { Loader, X } from "lucide-react"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { address } from "@/interfaces"
import Mystaricon from "@/components/mystaricon/mystaricon"
import AddedToCart from "@/components/addtocart/AddedToCart2"
import Image from "next/image"
export default function wishlist() {
      const[removeingid,setremoveingid]=  useState<null|string>(null)
           
     let{isLoading,wishlistdata,getwishlist}=  useContext(wishlistcontext)
     useEffect(() => { 
        getwishlist()
        console.log(wishlistdata);
            }
        , []) 
           async function removeing( productid:string ){ 
          const token= await getusertoken()
          setremoveingid(productid)      
        const response= await fetch('https://ecommerce.routemisr.com/api/v1/wishlist/'+productid,{
              method:'DELETE',
              headers:{
                token:token!
                // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmE0ZDBmODRkOTUwYzkwMjM3NjM0YyIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MzgwMTA2LCJleHAiOjE3NzIxNTYxMDZ9.JpFVqNg2TAhTUq5QLozfWTjsXopT0UOsURIMhgO0MeY"
              }
            })
            const  data:wishResponse = await response.json()
            if(data.status=="success"){
              toast.success('product deleted successfully')
              getwishlist()
            }           
            setremoveingid(null)
            console.log(token);
            
         }
           
          
  return (
    <>
      {isLoading?<Loading/>:wishlistdata?.count! > 0 ?
 <div className="container mx-auto px-10 py-3">
           <h1 className='text-3xl font-bold tracking-tight ms-7'>WishList</h1>
        <p className='text-muted-foreground mt-1 mb-3 ms-7'>{wishlistdata?.count} items in your cart</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {wishlistdata?.data.map((product)=> <div  key={product._id} >
        <Card className="h-[600px] flex flex-col">
               <Button variant="ghost" onClick={()=>removeing(product._id)} className=" ms-2" size="icon">
                {removeingid==product._id ? <Loader className="animate-spin"/>:  <X className="w-4 h-4" />}
               </Button>
          <Link href={'/products/'+product._id}>
  <CardHeader>
     <div className="h-[300px] w-full overflow-hidden">
    <Image width={300} height={300} className="w-full" src={product.imageCover} alt=""></Image>
     </div>
    <CardDescription>{product.brand.name}</CardDescription>
    <CardTitle>{product.title.split(' ',2).join(' ')}</CardTitle>
    <CardDescription>{product.category.name}</CardDescription>
  </CardHeader>
  <CardContent >
    <div className="flex">
            <Mystaricon/>
            <Mystaricon/>
            <Mystaricon/>
            <Mystaricon/>
    <p>{product.ratingsAverage}</p>
    </div>
    <p>Price:<span className="font-bold">{product.price}</span> EGP</p>
  </CardContent>
          </Link>
  <AddedToCart productId={product.id}/>
   </Card>
    </div>)
      }
      </div>
      </div>
:
    <div className="flex flex-col justify-center items-center gap-3 min-h-[75vh] ">
         <h2 className="text-3xl"> The wishlist Is Empty... </h2>
         <Link href={'/products'}>
         <Button className="cursor-pointer">Add Product To wishlist</Button> 
         </Link>
    </div>  
    }
    </>
  )
}
