const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint para carregar o arquivo JSON
app.get('/ra.json', (req, res) => {
    fs.readFile('ra.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao carregar o arquivo JSON');
            return;
        }
        res.send(JSON.parse(data));
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
