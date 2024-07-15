"use client";

import { useParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CourseSelectedPage() {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Inglés básico para principiantes
          </h1>
          <Link href="/home/courses/2/subscribe">
            <Button color="primary" type="button">
              Inscribirme
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold">¿Qué aprenderás en este curso?</h2>
          <ul className="list-disc mt-4">
            <li>El alfabeto inglés y su pronunciación</li>
            <li>Vocabulario básico</li>
            <li>Gramática esencial</li>
            <li>Conversación básica</li>
            <li>Comprensión auditiva</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">¿Qué necesitas para comenzar?</h2>
          <ul className="list-disc mt-4">
            <li>Actitud positiva y disposición para aprender</li>
            <li>Básica comprensión del español</li>
            <li>Compromiso con el tiempo de estudio</li>
            <li>Acceso a un dispositivo con conexión a internet</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Recursos adicionales</h2>
          <ul className="list-disc mt-4">
            <li>Diccionario bilingüe español-inglés</li>
            <li>Canciones y videos en inglés</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
