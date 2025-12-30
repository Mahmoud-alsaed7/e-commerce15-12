import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="homepage min-h-100 flex justify-center items-center text-center">
         <div>
          <h2 className="text-6xl font-bold mb-5">Welcome to ShopMart</h2>
          <p className="mb-5 text-1xl text-gray-500 w-155">Discover the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.</p>
           <div>
            <Button type="submit" className="me-3 p-6" > <Link href={'/products'}> shop Now</Link> </Button>
            <Button type="submit" className="bg-white p-6 text-black border border-black hover:bg-gray-50" > <Link href={'/categories'}> Browser category</Link> </Button>
           </div>
         </div>
    </div>
   </> 
  )
}
