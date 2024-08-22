const express = require ('express');
const app = express()

app.get('/', (req, res) => {
    res.json({mensagem: 'Hello World!'})
    res.json(mensagem)
});

app.listen(8080, () => {
    let mensagem = ({mensagem: 'Hello World!'})
    console.log("Servidor node iniciado em: " )
})