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
 code:z.string().regex(/^\d+$/, "Only numbers allowed")
})

export default function resetcode() {
  const[IsLoading,setIsLoading]   =  useState(false)
  const[Iserror,setIserror]   =  useState(null)       
   
 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
    mode:"onChange"
  })

    async function onSubmit(values: z.infer<typeof formSchema>) { 
     const resetCode= form.getValues('code')
      
      console.log("Form values:", values)
      setIsLoading(true) 
      const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({resetCode}),
      })
      const data = await response.json()
         if(data.status=="Success")
            {
              window.location.href='/resetpassword'
            }
            else{
              setIserror(data.message)
            }
            setIsLoading(false)
  }
  return (
    <>
   <div className="flex flex-col justify-center items-center min-h-[75vh] ">
    <h1 className="mb-3">ResetCode Now</h1>
     <Card className="w-100 p-6">

 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>your code</FormLabel>
              <FormControl>
                <Input placeholder="123456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit" className="w-20" disabled={!form.formState.isValid}>{IsLoading? <Loader className="animate-spin"/>:"Submit"} </Button>
                <p className=" text-red-600">{Iserror}</p>
      </form>
    </Form>
          </Card>
       <p className="mt-2">If you haven't received your reset code, please <Link href={'/login'} className="text-blue-500 hover:border-b-2 hover:border-blue-500 hover:duration-150"> Sign In </Link> now </p> 
    </div>
    </>
  )

}















