import { addtowishlistactons } from "@/app/(Pages)/products/_server/addtowishlist.actons";
import { getusertoken } from "@/app/Helpers/getUserToken";
import { HeartIcon, Loader } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { wishlistcontext } from "../WishListContext/wishlistcontext";


export default  function AddedToWishlist({productId}:{productId:string}) {
            const[Loading,setLoading]=useState(false)
            const{setwishlistdata , getwishlist}= useContext(wishlistcontext)
         const session=  useSession()
              const router= useRouter()
            async function AddedToWishlist(){
             setLoading(true)
    if(session.status=="authenticated"){
      const data= await addtowishlistactons(productId)
        // console.log(data);
        data.status=="success" && toast.success('product add successfully')
        setLoading(false)
        getwishlist()
    }else{
     router.push('/login')
    }  
  }
    return (
    <>
       {Loading?<Loader className="animate-spin"/>: <HeartIcon className="cursor-pointer" onClick={AddedToWishlist}/>}   
    </>
  )
  }
