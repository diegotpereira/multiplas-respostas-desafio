// Importa a função getTotalX do módulo getTotalX.js.
import {getTotalX}  from "../js/getTotalX.js";

// Array que simula as entradas do usuário.
let stringEntrada = ['2, 3', '2, 4', '16, 32, 96'];

// Variável que controla a posição atual da leitura das entradas.
let entradaAtual = 0;

// Função que simula a leitura de entradas.
function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}

// Função principal que realiza o processamento das entradas e exibe o resultado.
function principal() {
    
    // Lê a primeira múltipla entrada, que contém os valores n e m.
    const primeira_multipla_entrada = lerEntrada().replace(/\s+$/g, '').split(' ');

    // Converte os valores para o tipo inteiro.
    const n = parseInt(primeira_multipla_entrada[0], 10);
    const m = parseInt(primeira_multipla_entrada[1], 10);

    // Lê a segunda múltipla entrada, que contém os elementos do array arr.
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    // Lê a terceira múltipla entrada, que contém os elementos do array brr.
    const brr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    // Chama a função getTotalX com os arrays arr e brr, armazenando o resultado na variável total.
    const total = getTotalX(arr, brr);

    // Exibe o resultado no console.
    console.log(total + '\n');
}

// Chama a função principal para iniciar a execução do programa.
principal();