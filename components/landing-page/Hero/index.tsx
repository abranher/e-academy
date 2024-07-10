"use client";

import Link from "next/link";
import { Button, Divider } from "@nextui-org/react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// import {CheckIcon} from '../icons/CheckIcon';

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] flex justify-center items-center"
      >
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Abre las puertas a un mundo de oportunidades con Academy
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Empieza hoy mismo tu viaje hacia el dominio del inglés.
                  Academy es la mejor manera de aprender inglés en línea.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link href="/auth/signin">
                  <Button 
                    color="primary"
                    variant="shadow"
                    startContent={<ArrowLeftIcon />}
                  >
                    Empezar
                  </Button>
                  </Link>   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
    </>
  );
};
