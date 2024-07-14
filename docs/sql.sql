-- Tabla para usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    nivel_actual VARCHAR(2) DEFAULT 'A1', -- Nivel actual del usuario según el MCER
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para suscripciones
CREATE TABLE suscripciones (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    curso_id INT REFERENCES cursos(id),
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_fin TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla para cursos
CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    nivel VARCHAR(2) NOT NULL, -- Nivel del curso según el MCER
    es_gratis BOOLEAN DEFAULT FALSE
);

-- Tabla para lecciones
CREATE TABLE lecciones (
    id SERIAL PRIMARY KEY,
    curso_id INT REFERENCES cursos(id),
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    tipo VARCHAR(50) NOT NULL CHECK (tipo IN ('quiz', 'videochat')), -- Tipo de lección: quiz o videochat
    orden INT NOT NULL
);

-- Tabla para preguntas de quiz
CREATE TABLE preguntas (
    id SERIAL PRIMARY KEY,
    leccion_id INT REFERENCES lecciones(id),
    texto_pregunta TEXT NOT NULL
);

-- Tabla para opciones de respuestas
CREATE TABLE opciones (
    id SERIAL PRIMARY KEY,
    pregunta_id INT REFERENCES preguntas(id),
    texto_opcion TEXT NOT NULL,
    es_correcta BOOLEAN DEFAULT FALSE
);

-- Tabla para prácticas en videochat
CREATE TABLE practicas_videochat (
    id SERIAL PRIMARY KEY,
    leccion_id INT REFERENCES lecciones(id),
    tutor_id INT REFERENCES tutores(id),
    fecha_hora TIMESTAMP NOT NULL,
    duracion INT NOT NULL -- Duración en minutos
);

-- Tabla para tutores
CREATE TABLE tutores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) -- Especialidad del tutor
);

-- Tabla para resultados de quiz
CREATE TABLE resultados_quiz (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    leccion_id INT REFERENCES lecciones(id),
    puntuacion INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para sesiones de videochat
CREATE TABLE sesiones_videochat (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    practica_id INT REFERENCES practicas_videochat(id),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completado BOOLEAN DEFAULT FALSE
);

-- Tabla para pruebas finales
CREATE TABLE pruebas_finales (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    curso_id INT REFERENCES cursos(id),
    puntuacion INT NOT NULL,
    aprobado BOOLEAN DEFAULT FALSE,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para precios de cursos
CREATE TABLE precios_cursos (
    id SERIAL PRIMARY KEY,
    curso_id INT REFERENCES cursos(id),
    precio DECIMAL(10, 2) NOT NULL,
    moneda VARCHAR(3) NOT NULL -- Código de moneda, por ejemplo, USD, EUR, etc.
);

-- Tabla para métodos de pago
CREATE TABLE metodos_pago (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL, -- Nombre del método de pago, por ejemplo, "Tarjeta de Crédito", "PayPal", etc.
    descripcion TEXT
);

-- Tabla para pagos de cursos
CREATE TABLE pagos (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    curso_id INT REFERENCES cursos(id),
    metodo_pago_id INT REFERENCES metodos_pago(id),
    monto DECIMAL(10, 2) NOT NULL,
    moneda VARCHAR(3) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(20) NOT NULL CHECK (estado IN ('pendiente', 'completado', 'fallido'))
);
