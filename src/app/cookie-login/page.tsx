"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { object, string, InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card } from "src/components/ui/card";
import { Form, FormItem, FormLabel } from "src/components/ui/form";
import { useToast } from "src/components/ui/use-toast";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { login } from "src/apis/mutation";
import { nextServerHttp } from "src/apis/http";

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

      nextServerHttp.post("/api/auth", res?.data);
      // push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center ">
      <Card className="w-full p-8 sm:w-3/4 md:w-1/2 xl:w-1/3">
        <h1 className="text-center text-xl font-bold">LOGIN</h1>
        <p className="mb-3  text-center">Cookie Token Architecture</p>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} placeholder="Type your username" />
              <div className="h-[20px] text-sm text-red-700">
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
              <div className="h-[20px] text-sm text-red-700">
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
