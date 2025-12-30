import {   order, orderitems } from "@/interfaces"
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
export default async  function Getuserid({userId}:{userId:any}) {
      const response= await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
      let orders:orderitems[]= await response.json()    
      orders = orders.reverse()
  return (
    <>
      <div className="container flex flex-col py-6 px-10 gap-3">
      <h1 className="font-bold text-3xl">All Orders</h1>
        {
       orders.map((order)=> <Card key={order._id}  className="w-full  mx-auto ">
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg sm:text-xl">
          order #{order.id}
        </CardTitle>
        <CardDescription className="flex flex-col gap-1 text-sm">
          <span>
            Order Date:{" "}
            <span className="text-foreground">
               {new Date(order.createdAt).toLocaleString("en-US")}
            </span>
          </span>
          <span>
            Payment:{" "}
            <span className="text-green-600 font-semibold">
              {order.paymentMethodType} (Paid)
            </span>
          </span>
          <span>
            Delivered:{" "}
            <span className="text-red-600 font-semibold">
              No
            </span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm">
          Total:{" "}
          <span className="font-bold text-base">
            {order.totalOrderPrice} EGP
          </span>
        </p>

        <div>
          <h4 className="font-semibold mb-1">
            Shipping Address
          </h4>
          <p className="text-sm">
            {order.shippingAddress?.details} , {order.shippingAddress?.city}
            </p>
          <p className="text-sm">
            Phone: {order.shippingAddress?.phone}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <DropdownMenu>
  <DropdownMenuTrigger className="p-2 rounded-2xl bg-black text-white">View your orders</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Orders</DropdownMenuLabel>
    <DropdownMenuSeparator />
      {order.cartItems.map((item)=>
     <DropdownMenuItem key={item._id}>
      <div className="flex flex-col">
       <div className="flex">
        <Image width={70} height={70} src={item.product.imageCover} alt={item.product.title}/>
       <div className="flex flex-col mt-5">
         <p className="text-[15px] ms-3">{item.product.title}</p>
        <div className="flex">
          <p className="me-2 ms-3 text-gray-400 text-[12px]"> Qty:{item.count}</p>
        <p className=" text-gray-400 text-[12px]">| Price:{item.price} EGY</p>
        </div>
       </div>
       </div>
      </div>
      </DropdownMenuItem>
    )}
  </DropdownMenuContent>
</DropdownMenu>
        <span className="text-xs text-muted-foreground">
          Last updated:  {new Date(order.updatedAt).toLocaleString("en-US")}
        </span>
      </CardFooter>
    </Card>)
        }
     </div> 
    </>
  )
}
