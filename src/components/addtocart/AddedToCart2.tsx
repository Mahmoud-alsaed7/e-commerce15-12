"use client"
import { HeartIcon, Loader, ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../CartContext/CartContaxt";
import { AddedToCartaction } from "@/app/(Pages)/products/_server/addtocart.actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddedToWishlist from "../addtowishlist/AddedToWishlist";

export default function AddedToCart({productId}:{productId:string}) {
   const{setcartdata , getcart}= useContext(CartContext)
    const[Loading,setLoading]=useState(false)
    const session=  useSession()
     const router= useRouter()
   async function AddedToCart(){
    setLoading(true)
    if(session.status=="authenticated"){
      const data= await AddedToCartaction(productId)
        // console.log(data);
        data.status=="success" && toast.success('product add successfully')
        setLoading(false)
        setcartdata(data)
    }else{
     router.push('/login')
    }
      }

  return (
    <>
   <CardFooter className="gap-2">
   <Button  onClick={AddedToCart} className="grow"> {Loading?<Loader className="animate-spin"/>:<ShoppingCartIcon/>} Add To Cart</Button>
   </CardFooter> 
    </>
  )
}
