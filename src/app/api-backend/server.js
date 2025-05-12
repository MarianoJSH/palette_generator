const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Para que Express pueda leer el cuerpo de las peticiones POST en formato JSON

app.post('/get-palette', async (req, res) => {
    const colormindUrl = 'http://colormind.io/api/';
    const body = { model: 'default' };
  
    try {
      const response = await fetch(colormindUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching from Colormind:', error);
      res.status(500).json({ error: 'Failed to fetch palette from Colormind' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });