import { product } from "@/interfaces";
import { Params } from "next/dist/server/request/params";
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
import Prodectslice from "@/components/ProductSlice/page";
import AddedToCart from "@/components/addtocart/AddedToCart";

export default async function prodectDetails({params}:{params:Params}) {
        const {productId} = await params;
        console.log(productId);
         const response = await fetch("https://ecommerce.routemisr.com/api/v1/products/"+productId)
         const {data:product}:{data:product} = await response.json()
         console.log(product);
  return (
    <>
     <Card className="grid md:grid-cols-2 w-2/4 mx-auto  mt-10 items-center">
    <Prodectslice image={product.images} title={product.title}/>
  <div>
    <CardHeader>
    <CardDescription>{product.brand.name}</CardDescription>
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardHeader>
  <CardContent>
    <CardDescription>{product.category.name}</CardDescription>
    <div className="flex gap-1 mb-2">
      <Mystaricon/>
      <Mystaricon/>
      <Mystaricon/>
      <Mystaricon/>
      <p>({product.ratingsQuantity})</p>
    </div>
    <div className="flex justify-between mb-2">
      <p className="font-bold">Price: {product.price}EGP</p>
      <p className="font-bold">quantity: {product.quantity}</p>
    </div>
  </CardContent>
   <AddedToCart productId={product.id}/>
  </div>
</Card>
    </>
  )
}
