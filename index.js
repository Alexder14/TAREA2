const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint que retorna la información
app.get('/info', (req, res) => {
  const data = {
    nombre: 'Tu Nombre',
    carnet: '12345678',
    curso: 'Nombre del Curso'
  };
  res.json(data);
});

// Escuchar en el puerto 80
app.listen(80, () => {
  console.log('Servidor iniciado en el puerto 80');
});
