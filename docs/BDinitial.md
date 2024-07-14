usuarios:

id_usuario (serial primario)
nombre
apellido
correo_electronico
contrasena
fecha_nacimiento
genero
pais
tipo_usuario (gratuito, premium)
fecha_registro

niveles:

id_nivel (serial primario)
nombre_nivel (A1, A2, B1, B2, C1, C2)
descripcion

cursos:

id_curso (serial primario)
id_nivel (FK a niveles.id_nivel)
nombre_curso
descripcion

lecciones:

id_leccion (serial primario)
id_curso (FK a cursos.id_curso)
tipo_leccion (cuestionario, videochat)
titulo_leccion
contenido_leccion

preguntas:

id_pregunta (serial primario)
id_leccion (FK a lecciones.id_leccion)
enunciado
opcion_a
opcion_b
opcion_c
opcion_d
respuesta_correcta

respuestas_usuarios:

id_respuesta_usuario (serial primario)
id_usuario (FK a usuarios.id_usuario)
id_pregunta (FK a preguntas.id_pregunta)
id_opcion_seleccionada (FK a preguntas.opcion_a, preguntas.opcion_b, preguntas.opcion_c, preguntas.opcion_d)
fecha_hora_respuesta

progreso_usuarios:

id_progreso_usuario (serial primario)
id_usuario (FK a usuarios.id_usuario)
id_curso (FK a cursos.id_curso)
estado_leccion (completada, pendiente)
fecha_hora_completada

suscripciones:

id_suscripcion (serial primario)
id_usuario (FK a usuarios.id_usuario)
tipo_suscripcion (mensual, anual)
fecha_inicio
fecha_fin
estado (activa, cancelada)