"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { email, z } from "zod"
import { signIn } from "next-auth/react"
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
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { Loader } from "lucide-react"
import { Eye, EyeOff } from "lucide-react"


const formSchema = z.object({
  email: z.email('email is invaild').nonempty('the email is required').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email format is invalid"),
  password:z.string('password is invaild').nonempty('the password is required').min(6,'the password must be at least 6 characters').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      "password must contain uppercase, lowercase, and number"
    )
  })

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const searchparam = useSearchParams()
   console.log(searchparam.get('error'));
     
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:""
    },
    mode: "onChange"
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisLoading(true)
    const response =await signIn('credentials',{
          email:values.email,
          password:values.password,
          callbackUrl:'/',
          redirect:true
    })
    console.log(response);
    setisLoading(false)
  }
  return (
    <>
   <div className="flex flex-col justify-center items-center min-h-[75vh]">
    <h1 className="mb-3">Login Now</h1>
       <Card className="w-100 p-6">
       {searchparam.get('error')&& <h2 className="text-red-600">{searchparam.get('error')}</h2>}
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field,fieldState }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                 <Input
          {...field}
          placeholder="mahmoud@example.com"
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
              <FormLabel>password</FormLabel>
              <FormControl>
                <div className="relative">

                <Input
           type={showPassword ? "text" : "password"}
          {...field}
          className={clsx(
            fieldState.error && "border-red-500 focus-visible:ring-red-500",
            !fieldState.error &&
              fieldState.isTouched &&
              "border-green-500 focus-visible:ring-green-500", "pr-10" 
          )}
        />
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button disabled={!form.formState.isValid} type="submit" className={clsx(
    "w-full",
    !form.formState.isValid ? "bg-gray-400 cursor-not-allowed" : "bg-black"
  )}> {isLoading ?<Loader className="animate-spin" />:'Submit'}</Button>
      </form>
    </Form>
    <div className="text-center">
        <button type="submit" className=" underline cursor-pointer" ><Link href={'/forgetpassword'}>Forget PassWord..?</Link></button>
    </div>
        </Card>      
        <p className="mt-2">If you don't have account , please <Link href={'/register'} className="text-blue-500 hover:border-b-2 hover:border-blue-500 hover:duration-150"> Sign Up </Link> now </p> 
   </div>
    </>
  )
}
