# Usa una imagen base de Node (versión a tu preferencia)
FROM node:16-alpine

# Crea un directorio para la aplicación
WORKDIR /app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY index.js ./
COPY public ./public

# Instala las dependencias
RUN npm install

# Expone el puerto 80
EXPOSE 80

# Inicia la aplicación
CMD ["npm", "start"]
