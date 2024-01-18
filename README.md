# Desusweb

Desusweb es una landing page que promociona el desarrollo de paginas web de una empresa en la que formo parte a tiempo parcial. El Front-end fue realizado por mi en colaboracion con otro desarrollador, realizo peticiones a una API realizada por un desarrollador Back-end del mismo grupo.

A continuacion dejare el link de la pagina web subida a Netlify:

https://desusweb-19emiliano98.netlify.app


## Installation

Instala el proyecto con npm

```bash
  npm install
```
De esta forma instalara automaticamente todos los paquetes utilizados en el package.json    

### API Integration

- POST formulario de /inicio

```
  POST https://desusweb.com/api/mail/
```

|  Parameter  |   Type   |                Description             |
| :---------- | :------- | :------------------------------------- |
| `nombre`    | `string` | **Required**. Nombre del solicitante   |
| `apellido`  | `string` | **Required**. Apellido del solicitante |
| `email`     | `string` | **Required**. E-mail del solicitante   |
| `plan`      | `string` | **Required**. plan del solicitante     |
| `mensaje`   | `string` | mensaje del solicitante                |

Al realizar un POST a este endpoint estaremos enviando informacion para que la API envie un mail de respuesta por el plan seleccionado.


## Tech Stack

- **Lenguage:** Javascript
- **Libraries:** React, MaterialUI, Sweetalert2, Formik


## Used By

Este proyecto es usado por:

- Desusweb


## Getting Started

Para iniciar el proyecto utilizaremos el CLI siguiente:

```
  npm start
```
