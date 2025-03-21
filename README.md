# Tarea 2

Este proyecto contiene una aplicación Node.js con Express. Al presionar el botón en la interfaz web, retorna tu nombre, carné y curso. La aplicación está configurada para ejecutarse en el puerto 80 dentro de un contenedor Docker.

## Requisitos
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (opcional, si deseas probar localmente antes de dockerizar)

## Pasos para ejecutar

1. **Clona este repositorio** (o descárgalo).
2. En la carpeta raíz (donde está el Dockerfile), ejecuta:
   ```bash
   docker build -t tarea2 .
