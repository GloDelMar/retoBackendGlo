
# Desafío Final BackEnd APIv1

Este repositorio contiene los archivos necesarios que te permiten el registro de usuarios, la búsqueda de estos mediante su ID (ambos sin requisito de autorización), y  su inicio de sesión. Contiene, también, funciones que permiten realizar una publicación, modificarla, o eliminarla.

## Cómo instalar:

Para instalar y ejecutar esta aplicación, sigue estos pasos:

1. Clona este repositorio en tu máquina local usando git clone.
2. Navega hasta el directorio del proyecto.
 3. Ejecuta npm install para instalar todas las dependencias.
4. Configura tu base de datos según sea necesario.
5. Crea un archivo .env siguiendo el ejemplo de .env.example y configura las variables de entorno necesarias.
6. Ejecuta npm run dev para iniciar el servidor.

## Uso de la API

### Usuarios

Estas peticiones se recomienda hacerlas en Thunder Client para mayor claridad y facilidad, por lo que deberas instalar dicha extensión.

#### Obtener Usuario por su id

- GET http://localhost:8080/users/id

#### Crear un nuevo Usuario

- POST http://localhost:8080/users

    Body de la solicitud (JSON)

        {
            "name": "Nombre",
            "profilePic": "codigoDeLaPic",
            "email": "email@elsitio.com",
             "password": "tiburonsin123"
        }

### Publicaciones

#### Obtener todas las publicaciones

- GET http://localhost:8080/posts

#### Crear un nuevo post

- POST http://localhost:8080/posts

 Body de la solicitud (JSON)

        {
            "title": "El título",
            "imagen": "CodigoDeLaImagen",
            "body": "EL contenido de la publicación, maximo 400 caracteres",
            "name": "Nombre de usuario registrado"
        }

#### Acualización de un Post ya exitente

- PATCH http://localhost:8080/posts/id

Body de la solicitud (JSON)

        {
            "title": "El título",
            "body": "EL contenido de la publicación, maximo 400 caracteres",
        }

#### Eliminar un Post

- DELETE http://localhost:8080/posts/id

#### Buscar un post por el título

- GET http://localhost:8080/posts/?search=palabrasabucar

### Autentificación

#### Inicio de Sesión

- POST http://localhost:8080/auth/login

Body de la solicitud (JSON)

        {
            "email": "email@elsitio.com",
            "password": "tiburonsin123"
        }


## ¡Listo! Ya puedes empezar!

NOTA: Esta API se encuentra desplegada en:

https://retobackendglo.onrender.com