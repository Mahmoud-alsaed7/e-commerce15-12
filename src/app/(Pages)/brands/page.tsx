import { Brand } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export default async function brands() {

    const response= await fetch("https://ecommerce.routemisr.com/api/v1/brands")
          const {data:brands}:{data:Brand[]}= await response.json() 
          return (
            <>
    <div className="container mx-auto px-6 ">
      <h1 className="font-bold m-8 text-3xl  mt-15 ">Brands</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {brands.map((brand)=>
      <Link key={brand._id} href={'/brands/'+brand._id}>
      <div  className=" rounded-2xl border-2 px-4 py-6 shadow-md hover:scale-101 hover:shadow-lg  hover:duration-300">
        <Image width={300} height={300} className="w-full object-cover flex justify-start" src={brand.image} alt={brand.name} /> 
         <div className="text-center font-bold">
              <h2 className="text-black">{brand.name}</h2>
         </div>
      </div>
    </Link>
    )}
    </div>
    </div>
    </> 
  )
  
}
