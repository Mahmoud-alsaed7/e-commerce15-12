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
import { useContext, useRef, useState } from "react"
import { getusertoken } from "@/app/Helpers/getUserToken"
import { AddressContext } from "../addresscontext/AddressContext"
import { Loader } from "lucide-react"
 
export default function AddedAddress() {
       const[IsLoading,setIsLoading]= useState(false)

    let nameinput=useRef <HTMLInputElement | null>(null)
    let cityinput =useRef <HTMLInputElement | null>(null)
    let detailsinput =useRef <HTMLInputElement | null>(null)
    let phoneinput =useRef <HTMLInputElement | null>(null)
    

    const [isDisabled, setIsDisabled] = useState(true)
    const checkInputs = () =>{
    const name = nameinput.current?.value.trim()
    const city = cityinput.current?.value.trim()
    const details = detailsinput.current?.value.trim()
    const phone = phoneinput.current?.value.trim()
    setIsDisabled(!name || !city || !details || !phone)
}
    async function AddedAddressSession(){
        const token= await getusertoken()
        setIsLoading(true)
        const response=await fetch("https://ecommerce.routemisr.com/api/v1/addresses",{
            method:'POST',
            body:JSON.stringify({
             name:nameinput.current?.value ,
             city:cityinput.current?.value,
             details:detailsinput.current?.value,
             phone:phoneinput.current?.value
            }),
            headers:{
                token:token!
                 , 'content-type':"application/json"
              }
        })
        const data= await response.json()
        console.log(data);
        if(data.status=="success"){
            window.location.href='/profile'
        }
        setIsLoading(false)
    }
    return (
    <>
     <Dialog>
      <form>
        <DialogTrigger asChild>
            <Button className='w-full text-lg mt-4'>AddedAddress</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Make your Address</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>Name</Label>
              <Input ref={nameinput} id="City" onInput={checkInputs} />
            </div>
            <div className="grid gap-3">
              <Label>City</Label>
              <Input ref={cityinput} id="City" onInput={checkInputs}  />
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
            <Button type="submit" className="w-15"  disabled={isDisabled}  onClick={AddedAddressSession}>{IsLoading? <Loader className="animate-spin"/>:"ADD"}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </>
  )
}
