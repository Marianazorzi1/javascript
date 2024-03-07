// Solicite ao usuário para inserir um número representando um dia da
// semana (1 a 7) e mostre o nome do dia correspondente

import num from 'readline-sync';

let dia = num.questionInt('informe o dia: ')

switch (dia) {
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('terça')
        break;
    case 3:
        console.log('quarta')
        break;

    case 4:
        console.log('quinta')
        break;

    case 5:
        console.log('sexta')
        break;
    case 6:
        console.log('Sabado')
        break;
    case 7:
        console.log('domingo')
        break;

    default:
        console.log('dia não encontrado')
        break;
}