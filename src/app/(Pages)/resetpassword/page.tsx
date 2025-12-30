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
import Link from "next/link"
import { useState } from "react"
import { Loader } from "lucide-react"
 
const formSchema = z.object({
  email: z.email('email is invaild').nonempty('the email is required').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email format is invalid"),
  newPassword:z.string('newPassword is invaild').nonempty('the newPassword is required').min(6,'the newPassword must be at least 6 characters').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      "newPassword must contain uppercase, lowercase, and number"
    )
  
})
export default function resetpassword() {
    const[IsLoading,setIsLoading]   =  useState(false)
           const[Iserror,setIserror]   =  useState(null) 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newPassword:"",
    },
  mode:'onChange'
  })
    async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values)
      setIsLoading(true) 
      const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",{
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email:values.email,
            newPassword:values.newPassword
        }),
      })
      const data = await response.json()
         if(data.statusMsg=="fail")
            {
              setIserror(data.message)
            }
            else{
                window.location.href='/login'
            }
            setIsLoading(false)
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[75vh] ">
      <h1 className="mb-3">Resetpassword Now</h1>
      <Card className="w-100 p-6">
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           <FormField
           control={form.control}
           name="email"
           render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="ali@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>new password</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit" className="w-13" disabled={!form.formState.isValid}>{IsLoading? <Loader className="animate-spin"/>:"Send"} </Button>
                <p className=" text-red-600">{Iserror}</p>
      </form>
    </Form>
          </Card>
       <p className="mt-2"> If you have any problem , please <Link href={'/login'} className="text-blue-500 hover:border-b-2 hover:border-blue-500 hover:duration-150"> Sign In </Link> now </p> 
    </div> 
    </>
  )
}
