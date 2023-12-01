// O problema "Bon Appétit" no HackerRank 
// consiste em calcular a divisão justa do 
// custo de uma refeição entre dois amigos. A situação é a seguinte:

// Um grupo de amigos pede uma refeição em um restaurante.
// Cada item do menu tem um custo associado.
// Um dos amigos, Anna, está alérgica a alguns alimentos 
// e não os consome. Ela não deve pagar por esses itens.
// Os amigos decidem dividir igualmente o custo total da 
// refeição entre eles, exceto os itens que Anna não consome.
// A tarefa é determinar se a divisão foi feita corretamente 
// e, se não, calcular o valor que Anna deve reembolsar ao outro amigo.
// Os inputs do problema incluem o custo total da refeição, 
// uma lista de preços dos itens no menu, o índice do item que 
// Anna não consome e o valor pago por Anna. A saída esperada é 
// "Bon Appetit" se a divisão for justa ou o valor que Anna deve reembolsar se a divisão não for justa.

// // Função bonAppetit que calcula se a divisão da conta é justa ou o valor que Anna deve reembolsar
// export function bonAppetit(conta, k, b) {
    
//     // Inicializa a variável para armazenar o total da conta
//     let totalConta = 0;

//     // Itera sobre os itens da conta e soma seus valores
//     for (let index = 0; index < conta.length; index++) {
        
//         totalConta += conta[index];
        
//     }

//     // Verifica se a divisão da conta é justa
//     if((totalConta - conta[k]) / 2 == b) {

//         // Retorna uma mensagem indicando que a divisão é justa
//         return("Bon Appetit");
//     }

//     else {

//         // Retorna o valor que Anna deve reembolsar
//         return(b - (totalConta - conta[k]) / 2);
//     }

// }


// Função que verifica se a divisão da conta é justa após a recusa de pagamento de um item específico

export function bonAppetit(conta, k, b) {

    // Ordena a lista de custos em ordem crescente
    conta.sort((a, b) => a - b);

    // Inicializa o valor inicial para o cálculo da soma dos custos
    let valorInicial = 0;

    // Calcula a soma total dos custos usando a função reduce
    let somaDaConta = conta.reduce(
        (acumulador, valorAtual) => acumulador + valorAtual,
        valorInicial
    );

    // Calcula o resultado da divisão da conta após a recusa do item no índice k
    let resultado = somaDaConta - conta[k];

    // Calcula o valor atual que Anna deveria pagar
    let atual = resultado / 2;

    // Calcula a diferença entre o valor inicial e o valor atual
    let diferenca = b - atual;

    // Verifica se o item no índice k existe e se a divisão não é justa
    if (conta[k] && atual !== b) {
        
        // Retorna a diferença, que é o valor que Anna deve pagar
        return diferenca;

    } else {

        // Se a divisão for justa ou o item no índice k não existir, retorna a mensagem "Bon Appetit"
        return('Bon Appetit')
    }
}
