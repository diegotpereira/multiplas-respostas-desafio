// # A tarefa do problema "Plus Minus" no HackerRank 
// # é calcular a fração de elementos em uma matriz 
// # que são positivos, negativos e zero. A ideia é 
// # fornecer uma matriz de inteiros e calcular a 
// # proporção de elementos que são positivos, 
// # negativos e zero em relação ao número total 
// # de elementos na matriz.


// Definindo uma string de entrada e a linha atual
let stringEntrada = ['6', '-4, 3, -9, 0, 4, 1'];
let atualLinha = 0;

// Função para ler a próxima linha da entrada
function lerEntrada() {
    
    return stringEntrada[atualLinha++];
}


// Função principal do programa
function principal() {
    
    // Lendo o valor de 'n' e convertendo para inteiro
    const n = parseInt(lerEntrada().trim(), 10);

    // Lendo a linha de entrada, removendo espaços extras e convertendo para um array de inteiros
    const arr = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));

    // Chamando a função plusMinus com o array 'arr'
    // plusMinus(arr);
    const resultado = plusMinus(arr);

    console.log(resultado);
}

// Chamando a função principal para iniciar o programa
principal();


// function plusMinus(arr) {
    
//     // Inicializando contadores para elementos positivos, negativos e zero
//     let contadores = [0, 0, 0]
//     let tamanho = arr.length

//     // Iterando sobre os elementos do array
//     arr.forEach(n => {

//         // Incrementando o contador apropriado com base no valor do elemento
//         contadores[n > 0 ? 0 : n < 0 ? 1 : 2]++
//     });

//     // Iterando sobre os contadores e imprimindo as frações
//     contadores.forEach(contador => {

//         console.log(contador / tamanho);
//     });
// }


function plusMinus(arr) {

    // # Inicializando contadores para elementos positivos, negativos e zero
    let contar_positivo = 0
    let contar_negativo = 0
    let contar_zero = 0

    let tamanho = arr.length
    
    // # Iterando sobre os elementos da lista
    for (let index = 0; index < arr.length; index++) {

        // # Verificando se o elemento é positivo
        if (arr[index] > 0) {
            
            contar_positivo += 1;

        // # Verificando se o elemento é negativo
        } else if (arr[index] > 0) {
            
            contar_negativo += 1;

        // # Se o elemento não é positivo nem negativo, é zero
        } else {

            contar_zero += 1;
        }
        
    }
    
    // # Calculando as frações e retornando como uma tupla
    // return (Math.float(contar_positivo) / tamanho, Math.float(contar_negativo) / tamanho, Math.float(contar_zero) / tamanho)
    return (contar_positivo / tamanho, contar_negativo / tamanho, contar_zero / tamanho);
}

    
    
    
