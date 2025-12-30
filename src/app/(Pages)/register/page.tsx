"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader } from "lucide-react"
import { FailloginResponse, SuccessloginResponse } from "@/interfaces"
import Link from "next/link"


const formSchema = z.object({
  name:z.string('name is invaild').nonempty("the name is required").min(3, "the name must be at least 3 characters"),
  email: z.email('email is invaild').nonempty('the email is required').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email format is invalid"),
  password:z.string('password is invaild').nonempty('the password is required').min(6,'the password must be at least 6 characters').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
    "password must contain uppercase, lowercase, and number"),  
      rePassword:z.string('rePassword is invaild').nonempty("rePassword  is required"),
  phone:z.string("phone is invaild").nonempty("the phone is required").regex(/^\d{11}$/, "the number must be exactly 11 digits")
}).refine((data) => data.password === data.rePassword, {
    message: "passwords do not match",
    path: ["rePassword"],
  });
export default function register() {
     const[IsLoading,setIsLoading]   =  useState(false)
     const[Iserror,setIserror]   =  useState(null)
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    mode:"onChange"
  })
  const router = useRouter()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
        const response  = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",{
          method:"post",
          body:JSON.stringify(values),
          headers:{'content-type':'application/json'}
        })
        const data  = await response.json()
        console.log(data);

        if (data.message=="success"){
              router.push('/login')
        }else{
          setIserror(data.message)
        }
        setIsLoading(false)
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center min-h-[75%] py-10">
        <h2 className="font-bold text-2xl mb-5">Register now and Join US </h2>
        <Card className="w-100 p-6">
          <h3 className="text-2xl text-red-700">{Iserror}</h3>
           <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field , fieldState}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Mahmoud"  {...field} 
                className={clsx(
                            fieldState.error && "border-red-500 focus-visible:ring-red-500",
                            !fieldState.error &&
                              fieldState.isTouched &&
                              "border-green-500 focus-visible:ring-green-500"
                          )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field,fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Mahmoud123@gmail.com" {...field} 
                className={clsx(
                            fieldState.error && "border-red-500 focus-visible:ring-red-500",
                            !fieldState.error &&
                              fieldState.isTouched &&
                              "border-green-500 focus-visible:ring-green-500"
                          )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field,fieldState }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Mahmoud@123" {...field} 
                className={clsx(
                            fieldState.error && "border-red-500 focus-visible:ring-red-500",
                            !fieldState.error &&
                              fieldState.isTouched &&
                              "border-green-500 focus-visible:ring-green-500"
                          )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field,fieldState }) => (
            <FormItem>
              <FormLabel>Confirmpassword</FormLabel>
              <FormControl>
                <Input placeholder="Mahmoud@123" {...field} 
                className={clsx(
                            fieldState.error && "border-red-500 focus-visible:ring-red-500",
                            !fieldState.error &&
                              fieldState.isTouched &&
                              "border-green-500 focus-visible:ring-green-500"
                          )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field,fieldState }) => (
            <FormItem>
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input placeholder="01212335846" {...field} 
                className={clsx(
                            fieldState.error && "border-red-500 focus-visible:ring-red-500",
                            !fieldState.error &&
                              fieldState.isTouched &&
                              "border-green-500 focus-visible:ring-green-500"
                          )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid} className="w-full"> { IsLoading?<Loader className="animate-spin"/>:''}Submit</Button>
      </form>
    </Form>
        </Card>
     <p className="mt-2">If you have account , please <Link href={'/login'} className="text-blue-500 hover:border-b-2 hover:border-blue-500 hover:duration-150"> Sign In </Link> now </p> 
      </div>
    </>
  )
}
