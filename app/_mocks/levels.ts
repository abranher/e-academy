interface LevelCourses {
  id: number;
  name: string;
  description: string;
  courses: Courses[];
}

interface Courses {
  id_course: number;
  id_level: number;
  title: string;
  description: string;
  duration: number; // En horas
}

export const levels: LevelCourses[] = [
  {
    id: 1,
    name: "A1",
    description: "Principiante",
    courses: [
      {
        id_course: 1,
        id_level: 1,
        title: "Inglés básico para principiantes",
        description:
          "Curso que introduce los conceptos básicos del idioma inglés.",
        duration: 40,
      },
      {
        id_course: 2,
        id_level: 1,
        title: "Conversación en inglés básico",
        description:
          "Curso para practicar la conversación en inglés a nivel básico.",
        duration: 30,
      },
    ],
  },
  {
    id: 2,
    name: "A2",
    description: "Básico",
    courses: [
      {
        id_course: 3,
        id_level: 2,
        title: "Inglés intermedio: gramática y vocabulario",
        description:
          "Curso que profundiza en la gramática y el vocabulario del inglés.",
        duration: 50,
      },
      {
        id_course: 4,
        id_level: 2,
        title: "Comprensión auditiva en inglés",
        description: "Curso para mejorar la comprensión auditiva del inglés.",
        duration: 25,
      },
    ],
  },
  {
    id: 3,
    name: "B1",
    description: "Intermedio",
    courses: [
      {
        id_course: 5,
        id_level: 3,
        title: "Inglés B1: uso del idioma en situaciones cotidianas",
        description:
          "Curso que desarrolla la capacidad de usar el inglés en situaciones cotidianas.",
        duration: 60,
      },
      {
        id_course: 6,
        id_level: 3,
        title: "Preparación para el examen IELTS",
        description:
          "Curso que prepara a los estudiantes para el examen IELTS.",
        duration: 40,
      },
    ],
  },
  {
    id: 4,
    name: "B2",
    description: "Intermedio alto",
    courses: [
      {
        id_course: 7,
        id_level: 4,
        title: "Inglés B2: comunicación oral y escrita fluida",
        description:
          "Curso que desarrolla la fluidez en la comunicación oral y escrita en inglés.",
        duration: 50,
      },
      {
        id_course: 8,
        id_level: 4,
        title: "Inglés para negocios",
        description: "Curso que enseña inglés para el ámbito empresarial.",
        duration: 30,
      },
    ],
  },
  {
    id: 5,
    name: "C1",
    description: "Avanzado",
    courses: [
      {
        id_course: 9,
        id_level: 5,
        title:
          "Inglés C1: dominio del idioma en contextos académicos y profesionales",
        description:
          "Curso que desarrolla el dominio del inglés en contextos académicos y profesionales.",
        duration: 60,
      },
      {
        id_course: 10,
        id_level: 5,
        title: "Preparación para el examen TOEFL",
        description:
          "Curso que prepara a los estudiantes para el examen TOEFL.",
        duration: 40,
      },
    ],
  },
  {
    id: 6,
    name: "C2",
    description: "Maestría",
    courses: [
      {
        id_course: 11,
        id_level: 6,
        title: "Inglés C2: Dominio de la comunicación especializada",
        description:
          "Curso que desarrolla el dominio de la comunicación especializada en inglés, incluyendo la escritura académica y las habilidades de presentación.",
        duration: 60,
      },
      {
        id_course: 12,
        id_level: 6,
        title: "Inglés para investigación y fines académicos",
        description:
          "Curso que equipa a los estudiantes con las habilidades del idioma inglés necesarias para realizar investigaciones y escribir trabajos académicos.",
        duration: 40,
      },
    ],
  },
];
