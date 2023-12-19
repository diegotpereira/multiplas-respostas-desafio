import {bonAppetit} from '../js/bonAppetit.js';

// String de entrada fornecida como array
let stringEntrada = ['3, 10, 2, 9','1', '12'];

// Variável para rastrear a posição atual na string de entrada
let entradaAtual = 0;

// Função para ler a próxima entrada da string
function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
    
}


// Função principal

function principal() {

    // Converte a primeira entrada em um array de números
    const primeiraMultiplaEntrada = lerEntrada().split(',').map(num => parseInt(num, 10));

    // Número total de itens na conta
    const n =  parseInt(primeiraMultiplaEntrada.length);
    
    // Índice do item que Anna não consome
    const k = parseInt(lerEntrada().trim(), 10);;

    // Array de preços dos itens na conta
    const conta = primeiraMultiplaEntrada;

    // Valor pago por Anna
    const b = parseInt(lerEntrada().trim(), 10);

    // Chama a função bonAppetit e armazena o resultado
    const resultado = bonAppetit(conta, k, b);

    // Exibe o resultado no console
    console.log(resultado);

}

principal();