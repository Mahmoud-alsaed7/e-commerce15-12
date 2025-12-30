'use client'
import { getusertoken } from '@/app/Helpers/getUserToken'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { address} from '@/interfaces'
import { useContext } from 'react'
import { AddressContext } from '../addresscontext/AddressContext'


export default function Removeaddress({addressid}:{addressid:string|null}) {
        const{setaddressdata,getaddress} =useContext(AddressContext)
    async function removeaddress(){
      const token = await  getusertoken()
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
            //  getaddress()
        }
    }         
    return (
    <>
        <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-600 cursor-pointer"
              onClick={removeaddress}
            >
              <Trash2 size={18} />
        </Button> 
    </>
  )
}
