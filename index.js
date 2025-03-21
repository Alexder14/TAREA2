const express = require('express');
const path = require('path');
const app = express();

// Servir los archivos estáticos de la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint que retorna la información
app.get('/info', (req, res) => {
  const data = {
    nombre: 'Alexander Salazar',
    carnet: '201020600',
    curso: 'Curso de Node.js' // Cambia el nombre del curso si necesitas
  };
  res.json(data);
});

// Escuchar en el puerto 80
app.listen(80, () => {
  console.log('Servidor iniciado en el puerto 80');
});
