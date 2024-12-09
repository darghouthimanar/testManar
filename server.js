const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Port pour le serveur

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Données simulées
const posts = [
  { id: '1', titre: 'Premier post', contenu: 'Détails post 1' },
  { id: '2', titre: 'Deuxième post', contenu: 'Détails post 2' },
  { id: '3', titre: 'Troisième post', contenu: 'Détails post 3' },
  { id: '4', titre: 'Quatrième post', contenu: 'Détails post 4' },
];

// Routes API
app.get('/postList', (req, res) => {
  res.json(posts);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Node.js en cours d'exécution sur http://localhost:${PORT}`);
});