// Implementar um programa que simule uma calculadora. O usuário deverá
// informar dois valores e a operação desejada.
// Com auxílio de um switch deve ser computado e mostrado o resultado da
// operação.

import rl from 'readline-sync';

let calculadora = rl.questionInt('informe o tipo de operacao: ')
switch (calculadora) {
    case 1:
        console.log("---Adição---")
        let x = rl.questionInt('X: 2');
        let y = rl.questionInt('Y: ');
        console.log(`Total: ${x + y}`);
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



