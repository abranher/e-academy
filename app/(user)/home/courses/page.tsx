"use client";

import { levels } from "@/app/_mocks/levels";
import BoxBase from "@/components/landing-page/Boxes/BoxBase";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section className="px-6 py-16 w-full max-w-[1536px]">
        <h2 className="text-black font-bold text-4xl mb-4">
          Cursos disponibles
        </h2>
        {levels.map((level) => (
          <>
            <div className="py-6">
              <h2 className="text-black font-bold text-3xl mb-4">
                {level.name}
              </h2>
              <h3 className="text-black font-medium text-xl mb-4">
                {level.description}
              </h3>
              <div className="flex items-center gap-3">
                {level.courses.map((course) => (
                  <>
                    <Card className="max-w-[400px]">
                      <CardHeader className="flex gap-3">
                        <Image
                          alt="nextui logo"
                          height={100}
                          src="/images/cards/cards-01.png"
                          width={100}
                        />
                        <div className="flex flex-col">
                          <p className="text-md">{course.title}</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <p>{course.description}</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <Link href="/home/courses/2">
                          <Button color="primary" type="button">
                            Ver curso
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
