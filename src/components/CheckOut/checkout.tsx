"use client"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Input } from "../ui/input"
import { useRef, useState } from "react"
import { getusertoken } from "@/app/Helpers/getUserToken"
import { Loader } from "lucide-react"
import { Item } from "@radix-ui/react-navigation-menu"
 
export default function Checkout({cartId}:{cartId:string|undefined}) {
   const [isDisabled, setIsDisabled] = useState(true)
    const checkInputs = () =>{
    const city = cityinput.current?.value.trim()
    const details = detailsinput.current?.value.trim()
    const phone = phoneinput.current?.value.trim()
    setIsDisabled( !city || !details || !phone)
}
     const[IsLoading1,setIsLoading1]= useState<string|undefined>(undefined)
     const[IsLoading2,setIsLoading2]= useState<string|undefined>(undefined)
    let cityinput =useRef <HTMLInputElement | null>(null)
    let detailsinput =useRef <HTMLInputElement | null>(null)
    let phoneinput =useRef <HTMLInputElement | null>(null)
    
    async function CheckOutSession(){
         let shippingAddress ={
             city:cityinput.current?.value,
             details:detailsinput.current?.value,
             phone:phoneinput.current?.value
           }
        const token= await getusertoken()
        setIsLoading2(cartId)
        const response=await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
            method:'POST',
            body:JSON.stringify({shippingAddress}),
            headers:{
                token:token!
                // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmE0ZDBmODRkOTUwYzkwMjM3NjM0YyIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MzgwMTA2LCJleHAiOjE3NzIxNTYxMDZ9.JpFVqNg2TAhTUq5QLozfWTjsXopT0UOsURIMhgO0MeY"
                 , 'content-type':"application/json"
              }
        })
        const data= await response.json()
        console.log(data);
        if(data.status=="success"){
            window.location.href=data?.session.url
        }
        setIsLoading2(undefined)
    }
    async function CashSession(){
         let shippingAddress ={
             city:cityinput.current?.value,
             details:detailsinput.current?.value,
             phone:phoneinput.current?.value
           }
        const token= await getusertoken()
        setIsLoading1(cartId)
        const response=await fetch(`https://ecommerce.routemisr.com/api/v1/orders//${cartId}`,{
            method:'POST',
            body:JSON.stringify({shippingAddress}),
            headers:{
                token:token!
                // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmE0ZDBmODRkOTUwYzkwMjM3NjM0YyIsIm5hbWUiOiJBaG1lZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY0MzgwMTA2LCJleHAiOjE3NzIxNTYxMDZ9.JpFVqNg2TAhTUq5QLozfWTjsXopT0UOsURIMhgO0MeY"
                 , 'content-type':"application/json"
              }
        })
        const data= await response.json()
        console.log(data);
        if(data.status=="success"){
            window.location.href="/allorders"
        }
    setIsLoading1(undefined)
      }
    return (
    <>
     <Dialog>
      <form>
        <DialogTrigger asChild>
            <Button className='w-full text-lg mt-4'>Proceed to Checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add to products</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>City</Label>
              <Input ref={cityinput} id="City" onInput={checkInputs} />
            </div>
            <div className="grid gap-3">
              <Label>Details</Label>
              <Input ref={detailsinput} id="Details" onInput={checkInputs} />
            </div>
            <div className="grid gap-3">
              <Label>Phone</Label>
              <Input ref={phoneinput} id="Phone" onInput={checkInputs}/>
            </div>
            
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="w-15" disabled={isDisabled} onClick={CheckOutSession}>{IsLoading2 == cartId ? <Loader className="animate-spin"/> :"Viza"}</Button>
            <Button type="submit"  className="w-15" disabled={isDisabled} onClick={CashSession}> {IsLoading1 == cartId ? <Loader className="animate-spin"/> :"cash"}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </>
  )
}
