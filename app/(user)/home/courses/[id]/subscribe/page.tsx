"use client";

import BoxBase from "@/components/landing-page/Boxes/BoxBase";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function SubscribePage() {
  const companyData = {
    DI: "V-22338889",
    phone: "0412-5678745",
    bank: "Banco de Venezuela .s.a",
  };

  const [dataPM, setDataPM] = useState(false);

  const banks = [
    { key: 1, label: "Banco de Venezuela" },
    { key: 2, label: "Banco Mercantil" },
    { key: 3, label: "Banco Provincial" },
    { key: 4, label: "Banesco" },
    { key: 5, label: "Banco Nacional de Crédito" },
    { key: 7, label: "Banplus" },
    { key: 8, label: "Banco Exterior" },
    { key: 9, label: "Banco del Tesoro" },
    { key: 10, label: "Banco Activo" },
  ];

  return (
    <>
      <BoxBase>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Paga tu Suscripción
            </h1>

            <form
              id="payment-form"
              action="/ruta-de-tu-backend-para-procesar-el-pago"
              method="POST"
            >
              <div className="mb-4">
                <Input
                  label="Monto"
                  type="text"
                  id="monto"
                  name="monto"
                  required
                  readOnly
                  defaultValue="123"
                />
              </div>

              <div className="mb-4">
                <Select
                  label="Metodo de pago"
                  id="metodo_pago"
                  name="metodo_pago"
                  required
                  onChange={(e) =>
                    e.target.value === "movil"
                      ? setDataPM(true)
                      : setDataPM(false)
                  }
                >
                  <SelectItem key="movil">Pago Móvil (Venezuela)</SelectItem>
                </Select>
              </div>

              {dataPM && (
                <>
                  <div className="bg-white rounded-lg shadow-md p-4 my-9">
                    <h2 className="text-2xl font-bold mb-2">
                      Datos de Pago Móvil
                    </h2>
                    <div>
                      <p className="text-gray-600">
                        Cédula:{" "}
                        <span className="font-bold">{companyData.DI}</span>
                      </p>
                      <p className="text-gray-600">
                        Teléfono:{" "}
                        <span className="font-bold">{companyData.phone}</span>
                      </p>
                      <p className="text-gray-600">
                        Banco:{" "}
                        <span className="font-bold">{companyData.bank}</span>
                      </p>
                      <p className="text-gray-600">
                        Total de transacción:{" "}
                        <span className="font-bold">{"BS.D: 123"}</span>
                      </p>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-2">
                    Datos de tu transacción
                  </h2>

                  <div
                    className="mb-4 flex flex-col gap-6"
                    id="pago-movil-info"
                  >
                    <Select label="Selecciona tu banco" className="max-w-xs">
                      {banks.map((bank) => (
                        <SelectItem key={bank.key}>{bank.label}</SelectItem>
                      ))}
                    </Select>

                    <Input
                      label="Télefono"
                      type="text"
                      id="numero_telefono"
                      name="numero_telefono"
                      required
                    />

                    <Input
                      label="Cedula"
                      type="text"
                      id="cedula"
                      name="cedula"
                      required
                    />

                    <Input
                      label="Referencia"
                      type="text"
                      id="referencia"
                      name="referencia"
                      required
                    />
                  </div>

                  <Link href="/home">
                    <Button type="button" color="primary">
                      Pagar
                    </Button>
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </BoxBase>
    </>
  );
}
