# Proyecto de Tracking de Actividad

## Repositorio y Frontend

El proyecto de tracking de actividad incluye tanto el backend como un frontend interactivo para facilitar la gestión de actividades. 

### Frontend

Para interactuar con el frontend, que permite gestionar actividades de manera intuitiva:

#### Guía para correr el frontend

Asumiendo que ya se tiene el repositorio clonado, seguir estos pasos:

1. Ir a la carpeta frontend: `cd frontend`
2. Instalar las dependencias: `npm install`
3. Levantar el servidor: `npm start`

### Backend

El backend está implementado en Node.js con Express y utiliza Cassandra como base de datos para almacenar y consultar datos de actividades.

#### Guía para correr el backend

Para configurar y ejecutar el backend, asumiendo que ya se tiene el repositorio clonado, seguir estos pasos:

1. Asegúrate de tener Cassandra corriendo localmente y ejecuta los scripts proporcionados para crear el keyspace, la tabla 
2. Navega a la carpeta backend: `cd backend`
3. Instala las dependencias: `npm install`
4. Inicia el servidor en modo desarrollo: `npm run dev`


