"use client";

import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react";
import { useState } from "react";

export default function TutorInfo() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="w-full h-64">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src="/users/person2.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Abraham Hernández
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @abranher
            </h5>
          </div>
        </div>
        <Chip size="lg" variant="shadow" color="warning">A2</Chip>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
