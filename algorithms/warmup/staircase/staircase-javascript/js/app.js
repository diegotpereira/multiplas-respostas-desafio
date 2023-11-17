
// Variável que contém a entrada como uma string
let stringEntrada = '6';

// Variável que rastreia a posição atual durante a leitura da entrada
let entradaAtual = 0;

// Função para ler a próxima entrada
function lerEntrada() {
    
    return stringEntrada[entradaAtual++]

}

// Função principal que lê a entrada, chama a função 'staircase' e exibe o resultado
function principal() {
    
    // Converte a entrada lida para um número inteiro
    const n = parseInt(lerEntrada().trim(), 10);

    // Chama a função 'staircase' com o valor de entrada
    const resultado = staircase(n)

    // Exibe o resultado no console
    console.log(resultado);
}

// Chama a função principal para iniciar o programa
principal()


// // Função que gera a escada com base no valor de entrada 'n'
// function staircase(n) {

//     // Inicializa uma string vazia para armazenar os degraus
//     let resultado = "";
    
//     // Loop para construir cada degrau da escada
//     for (let index = 1; index <= n; index++) {
        
//         // Gera uma string de espaços com base no número de espaços necessários
//         let espaco = ' '.repeat((n - index));

//         // Gera uma string de '#' com base no número de '#' necessários
//         let passo = '#'.repeat((index));

//         // Retorna a concatenação de espaços e '#' para o degrau atual
//         resultado += (espaco + passo) + '\n';
        
//     }

//     // retorna resultado 
//     return resultado;
// }


// Função que gera uma escada de '#' com espaços em branco, onde n é a altura da escada
function staircase(n) {

    // Inicializa uma string vazia para armazenar a escada
    let resultado = "";

    // Loop para construir cada degrau da escada, começando de baixo para cima
    for (let index = n - 1; index >= 0; index--) {

        // Adiciona à string resultado a combinação de espaços em branco e '#' para o degrau atual
        resultado += (''.padStart(index) + ''.padEnd(n - index, '#') + '\n');
        
    }

    // Retorna a string resultante representando a escada
    return resultado
}