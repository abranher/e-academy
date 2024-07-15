"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { EyeSlashFilledIcon } from "@/components/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/icons/EyeFilledIcon";
import BoxBase from "@/components/landing-page/Boxes/BoxBase";

type Inputs = {
  email: string;
  password: string;
};

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/home");
      router.refresh();
    }
  });

  return (
    <>
      <BoxBase>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-md mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Iniciar sesión en su cuenta
              </h3>
              {error && (
                <div className="bg-red-500 text-lg text-white p-3 m-2 rounded w-full">
                  {error}
                </div>
              )}
              <form onSubmit={onSubmit} className="w-full">
                <div className="my-8">
                  <Input
                    size="lg"
                    fullWidth
                    label="Correo"
                    variant="bordered"
                    placeholder="Ingresa tu correo"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is require",
                      },
                    })}
                    type="email"
                    className="max-w-xs"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                <div className="my-8">
                  <Input
                    size="lg"
                    fullWidth
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is require",
                      },
                    })}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      Recuérdame
                    </label>
                  </div>
                  <div>
                    <a
                      href="#0"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="mb-6 w-full flex justify-center">
                  <Button color="primary" size="lg" type="submit">
                    Iniciar sesión
                  </Button>
                </div>
              </form>
              <p className="text-center text-base font-medium text-body-color">
                No tienes cuenta?{" "}
                <Link
                  href="/auth/signup"
                  className="text-primary hover:underline"
                >
                  Registrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </BoxBase>
    </>
  );
}
