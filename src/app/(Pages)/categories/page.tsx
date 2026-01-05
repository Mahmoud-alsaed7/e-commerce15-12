import { Category } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export default async function categories() {
       const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
         const {data:categorys}:{data:Category[]} = await response.json() 
  return (
    <>
    <div className="container mx-auto px-6 ">
          <h1 className="font-bold m-8 text-3xl mt-15 ">Categories</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
         {categorys.map((category)=> 
          <Link key={category._id}  href={'/categories/'+ category._id}>
         <div  className=" h-full rounded-2xl border-2 py-4 px-4 shadow-md hover:scale-101 hover:shadow-lg  hover:duration-300">
          
          <div className="h-[300px] w-full  overflow-hidden flex items-center justify-center">
            <Image width={300} height={300} className="w-full object-cover flex justify-start" src={category.image} alt={category.name} /> 
           </div>
             <div className="text-center font-bold mt-5">
                  <h2 className="text-black">{category.name}</h2>
             </div>
          </div>
         </Link>
         )}
        </div>
        </div>
    </>
  )
}
