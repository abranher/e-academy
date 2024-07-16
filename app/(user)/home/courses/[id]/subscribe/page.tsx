"use client";

import BoxBase from "@/components/landing-page/Boxes/BoxBase";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/shadcn/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { Bird, Rabbit, Turtle, Smartphone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import { Snippet } from "@nextui-org/react";

export default function SubscribePage() {
  const companyData = {
    DI: "22338889",
    phone: "04125678745",
    bank: "Banco de Venezuela",
  };

  const [dataPM, setDataPM] = useState(false);

  const banks = [
    { key: "1", label: "Banco de Venezuela" },
    { key: "2", label: "Banco Mercantil" },
    { key: "3", label: "Banco Provincial" },
    { key: "4", label: "Banesco" },
    { key: "5", label: "Banco Nacional de Crédito" },
    { key: "7", label: "Banplus" },
    { key: "8", label: "Banco Exterior" },
    { key: "9", label: "Banco del Tesoro" },
    { key: "10", label: "Banco Activo" },
  ];

  return (
    <>
      <BoxBase>
        <div className="flex items-center justify-center p-6">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Método de pago
            </legend>

            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2 h-20">
                <TabsTrigger value="pago-movil">
                  <div>
                    <span className="flex items-center justify-center flex-col">
                      <Smartphone className="h-6 w-6" />
                      Pago Movil
                    </span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="paypal">
                  <div>
                    <span className="flex items-center justify-center flex-col">
                      <svg role="img" viewBox="0 0 24 24" className="h-6 w-6">
                        <path
                          d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Paypal
                    </span>{" "}
                  </div>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pago-movil">
                <Card>
                  <CardHeader>
                    <CardTitle>Pago Movil</CardTitle>
                    <CardDescription>
                      Realiza tu pago a los siguientes datos:
                    </CardDescription>

                    <div>
                      <p>Banco beneficiario</p>
                      <Snippet symbol="#" variant="bordered" className="w-full">
                        {companyData.bank}
                      </Snippet>
                    </div>

                    <div>
                      <p>Documento de identidad</p>
                      <Snippet symbol="#" variant="bordered" className="w-full">
                        {companyData.DI}
                      </Snippet>
                    </div>

                    <div>
                      <p>Número de télefono</p>
                      <Snippet symbol="#" variant="bordered" className="w-full">
                        {companyData.phone}
                      </Snippet>
                    </div>
                    <div>
                      <p>Monto</p>
                      <Snippet symbol="#" variant="bordered" className="w-full">
                        123
                      </Snippet>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardDescription>
                      Completa los datos de tu pago:
                    </CardDescription>
                    <div className="space-y-1">
                      <Label htmlFor="name">Documento de identidad:</Label>
                      <Input id="name" placeholder="ej: 9890678" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Número de télefono:</Label>
                      <Input id="username" placeholder="04126756435" />
                    </div>
                    <div>
                      <p>Banco:</p>
                      <Select>
                        <SelectTrigger
                          id="model"
                          className="items-start [&_[data-description]]:hidden"
                        >
                          <SelectValue placeholder="Selecciona tu banco" />
                        </SelectTrigger>
                        <SelectContent>
                          {banks.map((bank) => (
                            <SelectItem value={bank.key} key={bank.key}>
                              <div className="flex items-start gap-3 text-muted-foreground">
                                <Rabbit className="size-5" />
                                <div className="grid gap-0.5">
                                  <p>{bank.label}</p>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="new">Referencia</Label>
                      <Input id="new" type="number" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Pagar</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="paypal">
                <Card>
                  <CardHeader>
                    <CardTitle>PayPal</CardTitle>
                    <CardDescription>
                      Realiza tu pago y llena los siguientes datos:
                    </CardDescription>
                    <div>
                      <p>Monto</p>
                      <Snippet symbol="#" variant="bordered" className="w-full">
                        123
                      </Snippet>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Correo</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">Referencia</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Pagar</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

          </fieldset>
        </div>
      </BoxBase>
    </>
  );
}
