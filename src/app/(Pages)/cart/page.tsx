"use client"

import { getusertoken } from "@/app/Helpers/getUserToken"
import Loading from "@/app/loading"
import AddedAddress from "@/components/addeduseraddresses/addedaddresse"
import { CartContext } from "@/components/CartContext/CartContaxt"
import Checkout from "@/components/CheckOut/checkout"
import { Button } from "@/components/ui/button"
import { cartResponse } from "@/interfaces"
import { Loader, Trash2 } from "lucide-react"
import Link from "next/link"
import {  useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"


export default function cart(){
  const[removeingid,setremoveingid]=  useState<null|string>(null)
  const[updatingid,setupdatingid]=  useState<null|string>(null)
  const[isclearing,setisclearing]=  useState<boolean>(false)
  let{IsLoading,cartdata,getcart,setcartdata}=  useContext(CartContext)
      useEffect(() => {
        if (typeof cartdata?.data.products[0]?.product == 'string' || cartdata == null) {
            getcart()
        }
    }, []) 
        async function removeing( productid:string ){ 
          const token= await getusertoken()
          setremoveingid(productid)      
        const response= await fetch('https://ecommerce.routemisr.com/api/v1/cart/'+productid,{
              method:'DELETE',
              headers:{
                token:token!
                // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmE0ZDBmODRkOTUwYzkwMjM3NjM0YyIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MzgwMTA2LCJleHAiOjE3NzIxNTYxMDZ9.JpFVqNg2TAhTUq5QLozfWTjsXopT0UOsURIMhgO0MeY"
              }
            })
            const  data:cartResponse = await response.json()
            if(data.status=="success"){
              toast.success('product deleted successfully')
              setcartdata(data)
            }           
            setremoveingid(null)
            console.log(token);
            
         }
         
         
        async function updating( productid:string,count:Number ){
          setupdatingid(productid)      
          const token= await getusertoken()
        const response= await fetch('https://ecommerce.routemisr.com/api/v1/cart/'+productid,{
              method:'PUT',
              body:JSON.stringify({count}),
              headers:{
                token:token!
                // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmE0ZDBmODRkOTUwYzkwMjM3NjM0YyIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MzgwMTA2LCJleHAiOjE3NzIxNTYxMDZ9.JpFVqNg2TAhTUq5QLozfWTjsXopT0UOsURIMhgO0MeY"
                 , 'content-type':"application/json"
              }
            })
            console.log(token);
            const  data:cartResponse = await response.json()
            if(data.status=="success"){
              toast.success('product Updated successfully')
              setcartdata(data)
            }           
            setupdatingid(null)
         }
        async function deleteCart(){
          setisclearing(true)
          const token= await getusertoken()
        const response= await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
              method:'DELETE',       
              headers:{
                token:token!
                // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmE0ZDBmODRkOTUwYzkwMjM3NjM0YyIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MzgwMTA2LCJleHAiOjE3NzIxNTYxMDZ9.JpFVqNg2TAhTUq5QLozfWTjsXopT0UOsURIMhgO0MeY"
              }
            })
            const  data = await response.json()
            if(data.message=="success"){
              setcartdata(null)
            }           
            setisclearing(false)
         }
  return (
    <>
            {IsLoading||typeof cartdata?.data?.products?.[0]?.product=="string"?<Loading/>:cartdata?.numOfCartItems! > 0 ?
             <div className='container mx-auto py-6 px-4'>
      <h1 className='text-3xl font-bold tracking-tight'>Shopping Cart</h1>
      <p className='text-muted-foreground mt-1'>{cartdata?.numOfCartItems} items in your cart</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:items-start  gap-6  mt-6 '>
        <div className='lg:col-span-2 space-y-4'>
         {cartdata?.data.products.map((item)=> <div  key={item._id} className='flex gap-4 rounded-xl border p-4 shadow-sm bg-card'>
            <img src={item.product.imageCover} className='w-24 h-24 rounded-lg object-cover md:w-28 md:h-28' alt='{item.product.title}'/>
            <div className='flex-1'>
              <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
                <div>
                  <h3 className='font-semibold text-base md:text-lg line-clamp-2'>
                    {item.product.title}
                  </h3>
                  <p className='text-sm text-muted-foreground mt-1'>
                 {item.product.brand.name} {item.product.category.name}
                  </p>
                </div>
                <div className='text-right'>
                  <div className='font-semibold'>{item.price}EGP</div>
                </div>
              </div>
              <div className='mt-3 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <button onClick={()=>updating(item.product.id,item.count-1)} disabled={item.count==1} aria-label='decrease' className='size-8 rounded-lg border hover:bg-accent'>
                    -
                    </button>
                  <span className='w-6 text-center font-medium'> { updatingid == item.product.id ? <Loader className="animate-spin"/>:item.count} </span>
                  <button onClick={()=>updating(item.product.id,item.count+1)} aria-label='increase' className='size-8 rounded-lg border hover:bg-accent'>
                    +
                  </button>
                   </div>
                   <button aria-label='remove' onClick={()=>removeing(item.product.id)} className='text-sm cursor-pointer flex text-destructive hover:underline items-center'>
                    {removeingid==item.product.id ? <Loader className="animate-spin"/>:'Remove'  }
                    </button>
              </div>
            </div>
          </div>)}
        </div>
<div className='lg:col-span-1 sticky top-18'>
  <div className='rounded-xl border p-5 shadow-sm'>
    <h2 className=' text-lg font-semibold'>Order Summary</h2>
    <div className='mt-4 space-y-2'>
      <div className='flex items-center justify-between'>
        <span className='text-sm text-muted-foreground'>
Subtotal :{cartdata?.numOfCartItems} items
        </span>
        <span className='font-semibold'>{cartdata?.data.totalCartPrice} EGP</span>
      </div>
      <div className=' flex items-center justify-between'>
        <span className='text-sm text-muted-foreground '>Shipping</span>
        <span className='text-emerald-600 font-medium'>Free</span>
      </div>
</div>
<div className='my-4 border-t'>
  <div className='flex items-center justify-between'>
    <span className='text-base font-semibold'>Total</span>
    <span className='text-base font-bold'>{cartdata?.data.totalCartPrice} EGP</span>
  </div>
  <Checkout cartId={cartdata?.cartId}/>
  <Link href={'/products'}>
   <Button className='w-full text-lg mt-2'>Continue Shopping</Button>
  </Link>
  <AddedAddress/>
</div>

  </div>
  <Button variant={'outline'} onClick={deleteCart} className='mt-2 ms-auto text-destructive hover:text-destructive flex'>
    {isclearing? <Loader className="animate-spin"/>  : <Trash2/>}
    Clear Cart
    </Button>
</div>
</div>
    </div>:
    <div className="flex flex-col justify-center items-center gap-3 min-h-[75vh] ">
         <h2 className="text-3xl"> The Cart Is Empty... </h2>
         <Link href={'/products'}>
         <Button className="cursor-pointer">Add Product To Cart</Button> 
         </Link>
    </div> 
           }
    
    </>
  )
}
