function Efetuarcalculo(peso, altura){
    let imc = peso /(altura*altura);
    return imc
}

function RetornaStatusIMC(imc){
    let status;
    if (imc < 18.5){
        status = 'Abaixo do peso';

    }
    else if (imc >= 18.5 && imc<24.9){
        status = 'peso normal'
    }
    else if (imc >= 24.9 && imc<30){
        status = 'acima do peso'
    }
    else {
        'obeso'
    }
    
    return status;

}
function validaParametro(parametro){
    if(isNaN(parametro))
    {
        return false
    }
    else {
        return true
    }

}

exports.Efetuarcalculo=Efetuarcalculo
exports.RetornaStatusIMC=RetornaStatusIMC
exports.validaParametro=validaParametro