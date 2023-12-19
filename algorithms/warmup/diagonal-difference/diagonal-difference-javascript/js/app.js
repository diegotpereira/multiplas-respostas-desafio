

// Definindo a entrada como um array de strings

let entradaString = ['3', '11, 2, 4', '4, 5, 6', '10, 8, -12'];

// Inicializando um índice para controlar a leitura da entrada
let entradaAtual = 0;

// Função para ler a próxima linha da entrada
function lerEntrada() {

    return entradaString[entradaAtual++];
}


// Função principal

function principal() {

    // Lendo o valor de n da entrada e convertendo para inteiro
    const n = parseInt(lerEntrada().trim(), 10);
    
    // Inicializando um array vazio com tamanho n
    let arr = Array(n)

    // Preenchendo o array com as linhas da matriz
    for (let index = 0; index < n; index++) {
        
        // Lendo a linha da entrada, removendo espaços em branco no final, dividindo os elementos 
        // e convertendo para inteiros
        arr[index] = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
        
    }

    // Chamando a função diagonalDifference com a matriz como argumento
    const resultado = diagonalDifference(arr)

    // Imprimindo o resultado
    console.log(resultado + '\n');
}

// Chamando a função principal

principal();


// Função para calcular a diferença diagonal

function diagonalDifference(arr) {

    let soma1 = 0;
    let soma2 = 0;

    // Iterando sobre as linhas da matriz
    for (let index = 0; index < arr.length; index++) {
        
        // Iterando sobre as colunas da matriz
        for (let compare = 0; compare < arr.length; compare++) {
            
            // Verificando se o índice atual está na diagonal principal
            if (index == compare) {
                
                // Adicionando o elemento da diagonal principal à soma1
                soma1 += arr[index][compare]
            }

            // Verificando se o índice atual está na diagonal secundária
            if (index + compare == arr.length - 1) {
                
                // Adicionando o elemento da diagonal secundária à soma2
                soma2 += arr[index][compare]
            }
        }
        
    }

    // Retornando a diferença absoluta entre as somas das diagonais
    return Math.abs(soma1 - soma2)

}