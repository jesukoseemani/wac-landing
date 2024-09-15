"use client";
import WacLogo from "@/assets/SVG/WacLogo";
import Cache from "@/lib/utilities/cache";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const onSubmitHandler = () => {
    const accessToken = "we got here is the token";
    Cache.setCookie("token", accessToken);
    toast.success("Successfully Login!");
    router.push("/dashboard");
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center items-center">
          <WacLogo />
        </div>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-55 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-purple-55">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-55 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={() => onSubmitHandler()}
              className="flex w-full justify-center rounded-md bg-purple-55 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-55"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
