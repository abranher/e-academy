# Modelos para Prisma

--------------------

# Modelos para Auth

## User

+ firstName
+ secondName
+ Name
+ username
+ email
+ password
+ DI

## Student

+ level

## Tutor

+ aproved_at
+ location
+ certificate
+ curriculum


--------------------

# Modelos para Suscripciones

## Subscription

+ method
+ level
+ student_id
+ amount


--------------------


# Modelos para Cursos o Niveles

## Level

+ title

## Prices

+ level_id
+ amount


## Lesson

+ level
+ number
+ content
+ practice_time

## LessonQuestion

+ text
+ lesson_id
+ lesson_id

## LessonOptions

+ text
+ correct boolean
+ question_id


## Practice

+ lesson_id
+ tutor_id
+ student_id
+ status: espera, en_curso, finalizado, cancelado

----------------------

# Modelos para las pruebas finales de los cursos

## Test

+ level
+ time
+ minimun (El minimo para pasar la prueba)

## TestQuestion

+ points
+ text
+ test_id

## TestOptions

+ text
+ correct boolean
+ test_question_id

