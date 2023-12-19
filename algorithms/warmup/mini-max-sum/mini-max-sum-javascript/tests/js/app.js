// # O problema "Mini-Max Sum" no HackerRank 
// # é um problema de programação que pede 
// # para você encontrar a soma mínima e máxima 
// # possível de quatro dos cinco elementos de uma lista.

// # A tarefa consiste nos seguintes passos:

// # Você recebe uma lista de cinco inteiros.
// # Deve-se calcular e imprimir a soma mínima 
// # e a soma máxima possível de quatro dos cinco elementos.
// # Ou seja, some quatro elementos da lista 
// # para encontrar a soma máxima e faça o mesmo 
// # para encontrar a soma mínima, excluindo um 
// # elemento diferente a cada vez.
// # Os números na lista podem ser grandes, então 
// # você precisa lidar com possíveis estouro de inteiro.

// Define uma string de entrada como um array contendo um único elemento
let stringEntrada = ['7, 69, 2, 221, 8974'];

// Inicializa o índice da entrada atual
let entradaAtual = 0;


// Função para ler a próxima entrada da stringEntrada
function lerEntrada() {
    
    return stringEntrada[entradaAtual++];
}


// Função principal do programa
function principal() {
    
    // Lê a entrada, remove espaços em branco e converte em um array de números inteiros
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    // Chama a função miniMaxSum com o array lido e armazena o resultado
    let resultado = miniMaxSum(arr)

    // Imprime o resultado
    console.log(resultado);

}

// Chama a função principal para iniciar o programa
principal()

// Função que calcula as somas mínima e máxima
function miniMaxSum(arr) {
    
    // Calcula a soma total dos elementos na array usando a função reduce
    let total = arr.reduce((acc, val) => acc + val) 

    // Inicializa as variáveis de soma máxima e mínima com o primeiro elemento do array
    let maxima_soma = total - arr[0]
    let minima_soma = total - arr[0]

    // Itera sobre os elementos do array
    for (const val of arr) {
        
        // Calcula a soma excluindo o elemento atual
        let resultado = total - val

        // Atualiza a soma máxima se o resultado for maior que a soma máxima atual
        if(resultado > maxima_soma) {

            maxima_soma = resultado
        }

        // Atualiza a soma mínima se o resultado for menor que a soma mínima atual
        if (resultado < minima_soma) {
            

            minima_soma = resultado
        }
    }

    // Retorna uma string formatada contendo as somas mínima e máxima
    return (`${minima_soma}, ${maxima_soma}`)
}