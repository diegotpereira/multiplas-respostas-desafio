

let entradaString = ['5','1000000001, 1000000002, 1000000003, 1000000004, 1000000005'];
let entradaAtual = 0;

function lerEntrada() {

    return entradaString[entradaAtual++];
}

function principal() {

    const arCount = parseInt(lerEntrada().trim(), 10);
    
    const ar = lerEntrada().replace(/\s+$/g, '').split(' ').map(tmp => parseInt(tmp, 10));
    // const ar = lerEntrada().split(' ').map(tmp => BigInt(tmp));

    if (ar.length !== arCount) {
        console.error("O comprimento do array não corresponde a arCount");
        return;
    }

    const resultado = aVeryBigSum(ar)

    console.log(resultado + '\n');
}

principal();

// // Função que recebe um array de números grandes e retorna a soma usando a função reduce
// function aVeryBigSum(ar) {
    
//     // Usa a função reduce para somar todos os elementos do array
//     const somar = ar.reduce((a, b) => a + b);

//     // Retorna o resultado da soma
//     return somar;
// }

// function aVeryBigSum(ar) {

//     // Inicializa uma variável para armazenar a soma
//     let soma = 0;

//     // Inicializa um array para armazenar o resultado
//     const numero = [];
    
//     // Loop através do array de números grandes
//     for (let i = 0; i < ar.length; i++){

//         // Adiciona cada número ao total acumulado
//         soma = ar[i] + soma;
//     }

//     // Adiciona o total acumulado ao array de resultados
//     numero.push(soma);

//     // Retorna o array de resultados
//     return numero;
// }

// function aVeryBigSum(ar) {

//     // Inicializa uma variável para armazenar a soma
//     let soma = 0;

//     // Loop através do array de números grandes
//     for (let index = 0; index < ar.length; index++) {
        
//         // Adiciona cada número ao total acumulado
//         soma = soma + ar[index];
        
//     }

//     // Adiciona cada número ao total acumulado
//     return soma
// }

function aVeryBigSum(ar) {

    // Inicializa uma variável BigInt para armazenar a soma
    let soma = BigInt("0")

    // Loop através do array de números usando for...of
    for (const numero of ar) {
        
        // Adiciona cada número ao total acumulado, convertendo para BigInt
        soma += BigInt(numero)
    }

    // Retorna o total acumulado como um BigInt
    return soma
}