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
while (cont<=10){
    let cont = 0
    let alunos = 40
    let nota1 = entrada.questionInt('Digite a primeira nota: ');
    let nota2 = entrada.questionInt('Digite a segunda nota: ');
    let nota3 = entrada.questionInt('Digite a terceira nota: ');
    let nota4= entrada.questionInt('Digite a quarta nota: ');
    const media = nota1 + nota2 + nota3 + nota4 /4
    console.log(`sao ${40} alunos e a media de um deles é ${media}
    `) 
    cont++
}

