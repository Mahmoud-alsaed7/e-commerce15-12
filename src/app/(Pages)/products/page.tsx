import { product } from "@/interfaces";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Mystaricon from "@/components/mystaricon/mystaricon";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import AddedToCart from "@/components/addtocart/AddedToCart";
export default async function products() {
   const response = await fetch('https://ecommerce.routemisr.com/api/v1/products')
           const {data:products}:{data:product[]}=await response.json()  
  return <>
         <div className="container mx-auto px-3 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {
        products.map((product)=> <div  key={product._id} >
        <Card className="h-[600px] flex flex-col">
          <Link href={'/products/'+product._id}>
  <CardHeader>
     <div className="h-[350px] w-full overflow-hidden">
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
    </>  
  }
