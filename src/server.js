const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = require('./app');


const PORT = process.env.PORT || 5000;

let server;

function startServer(port) {
    if (port) {
        server = app.listen(port, () => {
            console.log(`Server is running on:${port}`);
        });
    } else {
        server = app.listen(PORT, () => {
            console.log(`Server is running on:${PORT}`);
        });
    }
}

function stopServer() {
    server.close();
}

// Ajoutez cette ligne pour démarrer le serveur si le fichier est exécuté directement
if (require.main === module) {
    startServer();
}

// Exporte les fonctions pour démarrer et arrêter le serveur
module.exports = { startServer, stopServer, app };