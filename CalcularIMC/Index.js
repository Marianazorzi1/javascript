const express = require('express')
const app = express()

const calculadoraIMC = require ('./CalculadoraIMC')

app.get('/',( req, res) => {
    let peso = req.query.peso
    let altura = req.query.altura;

    if(calculadoraIMC.validaParametro(req.query.peso) && calculadoraIMC.validaParametro(req.query.altura)){

        let imc = calculadoraIMC.Efetuarcalculo(peso, altura)
        let status = calculadoraIMC.RetornaStatusIMC(imc)

        let json={imc: imc, status: status}
        res.json(json)
    }
    else{
        res.status(400).json({'Erro' : 'Peso ou altura inválidos'})
    }

})

app.listen(8080, () =>{
    let data = new Date();
    console.log('Servidor iniciado em: ', +data)
})

