 "use client"
import Loading from "@/app/loading"
import { AddressContext } from "@/components/addresscontext/AddressContext"
import Removeaddress from "@/components/removeuseraddress/Removeaddress"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useContext } from "react"
export default  function profile() {
      const{addressdata,IsLoading} =useContext(AddressContext)
      if (IsLoading || !addressdata) {
    return <Loading />
     }
  const addresses = addressdata.data ?? []
  
  return (
    <>
    {addresses?.length === 0 ?(
   <div className="flex flex-col justify-center items-center gap-3 min-h-[75vh] ">
         <h2 className="text-3xl"> The Address Is Empty... </h2>
         <Link href={'/cart'}>
         <Button className="cursor-pointer"> go to cart and Add Address</Button> 
         </Link>
    </div> )
    :
   ( <div className="container mx-auto px-10  ">
      <h1 className='text-3xl font-bold tracking-tight mb-5 mt-15'>Your Profile</h1>
       <div className="flex flex-col  gap-3">
              <p className=' text-xl  font-bold tracking-tight ms-40 mt-7'>Your Addresss</p>
       {addressdata?.data.reverse().map((address)=> 
         <Card key={address._id} className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shipping Address</CardTitle>
            <Removeaddress addressid={address._id}/>
          </CardHeader>
           <Link href={'/profile/'+address._id}>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium capitalize">{address.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">City</span>
              <span className="font-medium capitalize">{address.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Details</span>
              <span className="font-medium">{address.details}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Phone</span>
              <span className="font-medium">{address.phone}</span>
            </div>
          </CardContent>
      </Link>
        </Card>
    )}
       </div>
      </div>
   )
     }  
    </>
  )
}
  