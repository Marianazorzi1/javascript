// Escreva um programa que peça ao usuário para digitar um número e, em seguida,
// imprima a tabuada desse número usando um loop while.
import entrada from  'readline-sync'
// let num= entrada.questionInt('Digite um Número: ');
// let cont = 0;


// while(cont <=10){
//     let resultado = num * cont;
//     console.log(`${num} X ${cont} = ${resultado}`);
//     cont++;
// }


// Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de
// alunos.
// O Programa deverá:
// Ler o número de alunos da turma;
// Ler as notas dos 4 bimestres de cada aluno;
// Calcular e imprimir a média do aluno;
// Calcular e imprimir a média da turma.
import rl, { questionInt } from 'readline-sync';

// 01-Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
/*
let num = rl.questionInt("Informe o número da tabuada: ");
let cont = 0;
while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
}
*/




// 02-Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
// O Programa deverá:
// Ler o número de alunos da turma;
// Ler as notas dos 4 bimestres de cada aluno;
// Calcular e imprimir a média do aluno;
// Calcular e imprimir a média da turma.


// let numAlunos = rl.questionInt("Informe o número de alunos da turma: ")


// let somaMedias = 0;
// let contadorAlunos = 1;


// while (contadorAlunos <= numAlunos) {
//     console.log(`Aluno ${contadorAlunos}:`);

//     let somaNotas = 0;
//     let contadorBimestres = 1;


//     while (contadorBimestres <= 4) {
//         let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
//         somaNotas += nota;
//         contadorBimestres++;
//     }

//     let mediaAluno = somaNotas / 4;


//     somaMedias += mediaAluno;


//     console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);


//     contadorAlunos++;
// }


// let mediaGeralTurma = somaMedias / numAlunos;


// console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);



// atividade3



// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


// let tentativa;

// do {

//     tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100):");


//     if (tentativa === numeroAleatorio) {
//         console.log("Parabéns! Você adivinhou o número correto.");
//     } else if (tentativa < numeroAleatorio) {
//         console.log("Tente um número maior.");
//     } else {
//         console.log("Tente um número menor.");
//     }

// } while (tentativa !== numeroAleatorio);


// atidade4

// let anterior = 0;
// let atual = 1;

// console.log(anterior);
// console.log(atual);


// for (let i = 3; i <= 20; i++) {

//     let proximo = anterior + atual;


//     console.log(proximo);


//     anterior = atual;
//     atual = proximo;
// }

// atividade5

import rl, { questionInt } from 'readline-sync';

for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    // Calcular o imposto de renda conforme a tabela
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    // Imprimir o nome e o valor do imposto de renda
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}