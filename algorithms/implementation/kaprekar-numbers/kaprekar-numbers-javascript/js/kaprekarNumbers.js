



export function kaprekarNumbers(p, q) {

    // Inicializa um array vazio para armazenar os números de Kaprekar modificados
    let resultado = [];

    // Itera sobre cada número no intervalo de p a q (inclusive)
    for (let index = p; index <= q; index++) {
        
        // Calcula o quadrado do número atual e converte para string
        const elemento = (index * index).toString();

        // Divide a string ao meio para obter a primeira parte
        const num1 = elemento.substring(0, elemento.length / 2);

        // Divide a string ao meio para obter a segunda parte
        const num2 = elemento.substring(elemento.length /2, elemento);

        // Verifica se a soma das duas partes é igual ao número original
        if (Number(num1) + Number(num2) === index) {
            
            // Adiciona o número ao array de resultados
            resultado = resultado.concat(index);
        }
        
    }

    // Se nenhum número de Kaprekar foi encontrado, imprime 'INVALID RANGE'
    if (resultado.length === 0) {
        
        console.log('INVALID RANGE');

    } else {

        // Caso contrário, imprime todos os números de Kaprekar encontrados
        console.log(...resultado);
    }
    
}