import { getusertoken } from "@/app/Helpers/getUserToken"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Params } from "next/dist/server/request/params";
import { profiledetail } from "@/interfaces"
export default async function profiledetails({params}:{params:Params}) {
      const token = await getusertoken()
       const{profileid}= await params
       console.log(profileid);       
      const response =  await fetch("https://ecommerce.routemisr.com/api/v1/addresses/"+profileid,{
        headers:{
            token:token!
        }
      })
      const data:profiledetail = await response.json()
    return (
    <>
     <div className="container mx-auto py-10">
         <div className="container mx-auto px-10 ">
      <h1 className='text-3xl font-bold tracking-tight mb-5 mt-10 p-5git status'>Specific Address</h1>
       <div className="flex flex-col gap-3">
         <Card  className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shipping Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium capitalize">{data?.data?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">City</span>
              <span className="font-medium capitalize">{data?.data?.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Details</span>
              <span className="font-medium">{data?.data?.details}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Phone</span>
              <span className="font-medium">{data?.data?.phone}</span>
            </div>
            <div>
                <Link href={'/profile'}>
                     <Button className=' text-lg mt-4'>GO To Your Profile</Button>
                </Link>
            </div>
          </CardContent>
        </Card>
       </div>
      </div>
      </div>
    </>
  )
}
