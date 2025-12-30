import { Brand, product } from "@/interfaces";
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
import AddedToCart from "@/components/addtocart/AddedToCart";
import Mystaricon from "@/components/mystaricon/mystaricon";
import Image from "next/image";
import Link from "next/link";
export default async function brandsDetails({params}:{params:Params}) {
  const  {brandsid} = await params
   console.log(brandsid);
        
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandsid}`)
             const {data:brands}:{data:product[]}=await response.json()
   return (
    <>
      <div className="container mx-auto px-3 py-6">
        <h2 className="text-2xl font-bold mb-2">{brands[0]?.brand.name}</h2>
        <p className="text-gray-600 mb-5">Products from this brand</p>
        {brands.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {
        brands.map((brand)=> <div  key={brand._id} >
         
        <Card className=" h-[600px] flex flex-col">
           <Link href={'/products/'+brand._id}>
  <CardHeader>
    <div className="h-[350px] w-full overflow-hidden">
    <Image width={300} height={300} className="w-full" src={brand.imageCover} alt=""></Image>
     </div>

    <CardDescription>{brand.brand.name}</CardDescription>
    <CardTitle>{brand.title.split(' ',2).join(' ')}</CardTitle>
    <CardDescription>{brand.category.name}</CardDescription>
  </CardHeader>
  <CardContent >
    <div className="flex">
            <Mystaricon/>
            <Mystaricon/>
            <Mystaricon/>
            <Mystaricon/>
    <p>{brand.ratingsAverage}</p>
    </div>
    <p>Price:<span className="font-bold">{brand.price}</span> EGP</p>
  </CardContent>
          
   </Link>
  <AddedToCart productId={brand.id}/>
   </Card>
    </div>)
      }
      </div>:
       <div className=" flex justify-center items-center  min-h-75">
           <h2>No products found from this brand.</h2>
       </div>
}      
      </div>
    </>
  )
}
