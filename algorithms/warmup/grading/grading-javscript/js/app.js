import { gradingStudents } from '../js/gradingStudents.js';

let stringEntrada = ['2', '37', '38'];
let atualLinha = 0;

// Função para ler a próxima entrada da stringEntrada
function lerEntrada() {
    
    return stringEntrada[atualLinha++];
}

// Função principal
function principal() {
    
    // Obtém o número de elementos a serem lidos
    const n = parseInt(lerEntrada().trim(), 10);

    // Inicializa um array para armazenar as notas
    let grades = [];

    // Loop para ler as notas e adicioná-las ao array
    for (let index = 0; index < n; index++) {

        // Lê a próxima entrada, converte para inteiro e adiciona ao array de notas
        const elemento = parseInt(lerEntrada().trim(), 10);

        grades.push(elemento);
        
    }

    // Chama a função gradingStudents para processar as notas
    const resultado = gradingStudents(grades);

    // Imprime o resultado, cada nota em uma nova linha
    console.log(resultado.join('\n') + '\n');
}

// Chama a função principal para executar o programa
principal();

