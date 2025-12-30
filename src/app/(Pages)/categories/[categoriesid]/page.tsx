import { Params } from 'next/dist/server/request/params'
import Image from 'next/image'
import Link from 'next/link'
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
import AddedToCart from '@/components/addtocart/AddedToCart';
import Mystaricon from '@/components/mystaricon/mystaricon';

export default async function categorydetails({params}:{params:Params}) {
  const {categoriesid}= await params
  console.log(categoriesid)
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoriesid}`)
           const {data:categorys}:{data:product[]} = await response.json()
  return (
    <>
     <div className="container mx-auto px-3 py-6">
       <h2 className="text-2xl font-bold mb-2">{categorys[0]?.category.name}</h2>
        <p className="text-gray-600 mb-5">Products from this category</p>
     {categorys.length > 0 ?
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {
        categorys.map((category)=> <div  key={category._id} >
        <Card className='h-[600px] flex flex-col'>
          <Link href={'/products/'+category._id}>
  <CardHeader>
    <div className="h-[350px] w-full overflow-hidden">
    <Image width={300} height={300} className="w-full" src={category.imageCover} alt=""></Image>
   </div>
    <CardDescription>{category.brand.name}</CardDescription>
    <CardTitle>{category.title.split(' ',2).join(' ')}</CardTitle>
    <CardDescription>{category.category.name}</CardDescription>
  </CardHeader>
  <CardContent >
    <div className="flex">
            <Mystaricon/>
            <Mystaricon/>
            <Mystaricon/>
            <Mystaricon/>
    <p>{category.ratingsAverage}</p>
    </div>
    <p>Price:<span className="font-bold">{category.price}</span> EGP</p>
  </CardContent>
          </Link>
  <AddedToCart productId={category.id}/>
   </Card>
    </div>)
      }
      </div>:
      <div className=" flex justify-center items-center  min-h-75">
           <h2>No products found from this category.</h2>
       </div>
      }
      </div>
    </>
  )
}
