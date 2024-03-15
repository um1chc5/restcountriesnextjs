"use client";

import { Button } from "src/components/ui/button";
import { Card } from "src/components/ui/card";
import { Form, FormItem, FormLabel } from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { useToast } from "src/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { object, string, number, date, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "src/apis/mutation";

const FormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email is invalid"),
  password: z.string({ required_error: "Password is required" }),
});

const YupFormSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password length is at least six characters")
    .required("Password is required"),
});

function Login() {
  const { toast } = useToast();
  const { push } = useRouter();
  const form = useForm<InferType<typeof YupFormSchema>>({
    resolver: yupResolver(YupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: InferType<typeof YupFormSchema>) => {
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
      <Card className="w-full p-8 sm:w-3/4 md:w-1/2 xl:w-1/3">
        <h1 className="mb-3 text-center text-3xl font-bold">LOGIN</h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} placeholder="Type your username" />
              <div className="text-sm h-[20px] text-red-700">
                {errors.email?.message}
              </div>
            </FormItem>
            <FormItem>
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password")}
                type="password"
                placeholder="Type your password"
              />
              <div className="text-sm h-[20px] text-red-700">
                {errors.password?.message}
              </div>
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
