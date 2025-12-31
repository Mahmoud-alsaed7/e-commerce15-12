'use client'
import { getusertoken } from '@/app/Helpers/getUserToken'
import { Button } from '../ui/button'
import { Loader, Trash2 } from 'lucide-react'
import { address} from '@/interfaces'
import { useContext, useState } from 'react'
import { AddressContext } from '../addresscontext/AddressContext'


export default function Removeaddress({addressid}:{addressid:string|null}) {
        const{setaddressdata,getaddress} =useContext(AddressContext)
        const[IsLoading,setIsLoading]=useState(false)
    async function removeaddress(){
      const token = await  getusertoken()
      setIsLoading(true)
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/addresses/"+addressid,{
            method:'delete',
            headers:{
                token:token!
          }
          })             
          const data:address = await response.json()
          console.log(data);
          if(data.status=="success"){
            setaddressdata(data)
        }
        setIsLoading(false)
    }         
    return (
    <>
        <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-600 cursor-pointer"
              onClick={removeaddress}
            >
           {IsLoading? <Loader className='animate-spin'/>:<Trash2 size={18} />}   
        </Button> 
    </>
  )
}
