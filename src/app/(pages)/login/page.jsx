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
  onSubmit,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


const Login = () => {
const form = useForm()
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-screen flex items-center justify-center m-4">
      <FormField
        control={form.control}
        name="Login"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Login</FormLabel>
            <FormControl>
              <Input placeholder="email" type="email"  />
            </FormControl>
            <FormControl>
              <Input placeholder="password" type="password"  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default Login
