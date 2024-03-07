// Implementar um programa que simule uma calculadora. O usuário deverá
// informar dois valores e a operação desejada.
// Com auxílio de um switch deve ser computado e mostrado o resultado da
// operação.

import rl from 'readline-sync0';

let calculadora = rl.questionInt('informe o tipo de operacao: ')
switch (calculadora) {
    case 1:
        console.log("Adição")
        break;
    case 2:
        console.log("Subtração")
        break;
    case 3:
        console.log('Multiplicação')
        break;
    case 4:
        console.log("divisão")
        break;
}
if (1){

    let x =EntradadeDados.questionInt('X: ');
    let y =EntradadeDados.questionInt('Y: ');
    console.log(`Total: ${x+y}`);
}

    
