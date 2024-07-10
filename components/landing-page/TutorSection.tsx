import { Button, Divider } from "@nextui-org/react";
import React from "react";

export default function TutorSection() {
  return (
    <>
      <section className="flex justify-center items-center flex-col">
        <h3 className="text-xl text-foreground">Start your free trials</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl
        </p>

        <Button>Button</Button>
      </section>

      <Divider />
    </>
  );
}
