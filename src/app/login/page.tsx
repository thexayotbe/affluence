"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Label } from "../../Components/ui/label";
import { Input } from "../../Components/ui/input";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { signIn } from "@/utils/cookieAuth";
import { toast } from "sonner";

export default function Login() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const getUserDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const url = "https://squid-app-bjq85.ondigitalocean.app";
  const login = async () => {
    console.log(userData);
    try {
      const response = await axios.post(`${url}/token`, userData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const { token } = response.data;
      if (signIn(token)) {
        router.push("/transactions");
        toast.success("Successfully logged in.🥳");
        console.log("Successfully logged in");
      } else throw new Error("Password or username is incorrect");
    } catch (error) {
      console.error(error);
      toast.error("Password or username is incorrect");
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 ">
        <h2 className="font-bold text-3xl text-green-1 text-center pb-[25px] ">
          Come back to Affluence
        </h2>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4 mt-10">
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="username"
              placeholder="projectmayhem@fc.com"
              type="email"
              onChange={getUserDataHandler}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 mt-10">
            <Label htmlFor="password">Password</Label>
            <Input
              placeholder="••••••••"
              type="password"
              name="password"
              onChange={getUserDataHandler}
            />
          </LabelInputContainer>

          <button
            onClick={login}
            className="bg-gradient-to-br relative group/btn from-zinc-90 to-zinc-900  block bg-green-1 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign in &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
        <p className="text-center text-black-5/90 font-sans">
          Don't have account ?
          <Link href="/signup">
            {" "}
            <span className="text-green-1 cursor-pointer">
              Create an account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent " />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
