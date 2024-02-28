"use client";

import { login } from "@/apis/mutation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  password: z.string({ required_error: "Password is required" }),
});

function Login() {
  const { toast } = useToast();
  const { push } = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const segment = useSelectedLayoutSegment();

  const { handleSubmit, register } = form;

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const res = await login(data.email, data.password);
      toast({
        title: "Đăng nhập thành công",
      });
      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div>{segment}</div>
      <Card className="w-full p-8 sm:w-3/4 md:w-1/2 xl:w-1/3">
        <h1 className="mb-3 text-center text-3xl font-bold">LOGIN</h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} placeholder="Type your username" />
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password")}
                type="password"
                placeholder="Type your password"
              />
            </FormItem>
            <Button className="mt-3" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
