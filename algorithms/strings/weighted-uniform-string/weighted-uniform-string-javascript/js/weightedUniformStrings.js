


// # A tarefa do problema "Weighted Uniform Strings" é a seguinte:

// # Dada uma string contendo apenas letras minúsculas de 'a' a 'z', 
// # você deve determinar se uma série de consultas fornecidas pode 
// # ser atendida pela string. Cada consulta consiste em um número 
// # inteiro. Se o número for um dos pesos das subsequências uniformes 
// # da string, a resposta para essa consulta é "Yes"; caso contrário, 
// # é "No".

// # Uma subsequência uniforme de uma string é definida como uma série 
// # contígua de caracteres idênticos. O peso de uma subsequência 
// # uniforme é o produto do comprimento da subsequência pelo valor 
// # do caractere, onde 'a' tem peso 1, 'b' tem peso 2, ..., 'z' tem 
// # peso 26.

// # Por exemplo, para a string "abccddde" as subsequências uniformes 
// # são "a", "b", "c", "cc", "d", "dd", "ddd", "e", então os pesos 
// # são 1, 2, 3, 6, 4, 8, 12, 5, respectivament

// Define uma função chamada weightedUniformStrings que recebe duas variáveis, s e consultas

export function weightedUniformStrings(s, consultas) {

    // Inicializa uma variável prev vazia para armazenar o caractere anterior durante o loop
    let prev = "";
    
    // Inicializa uma variável pesos como 0 para rastrear o número de repetições consecutivas do mesmo caractere
    let pesos = 0;

    // Cria um objeto vazio chamado possibilidade para armazenar os pesos e caracteres correspondentes
    const possibilidade = {};

    // Loop através de cada caractere na string s
    for(let elemento of s) {

        // Verifica se o caractere atual é igual ao caractere anterior
        if (elemento === prev) 

            // Se for igual, incrementa o contador de pesos
            pesos += 1;
            
        else {

            // Se não for igual, atualiza o caractere anterior para o caractere atual
            prev = elemento;

            // Reseta o contador de pesos para 1
            pesos = 1;
        }

        // Calcula o valor do peso multiplicando o valor numérico do caractere pela quantidade de repetições
        const valor = (elemento.charCodeAt() - 96) * pesos;

        // Armazena o caractere no objeto possibilidade com o peso correspondente como chave
        possibilidade[valor] = elemento;
    }

    // Inicializa um array vazio chamado saida para armazenar as respostas
    let saida = [];

    // Loop através de cada consulta no array de consultas
    for(let consulta of consultas)

       // Verifica se o peso consultado está presente no objeto possibilidade, 
       // se sim, adiciona "Yes" ao array saida, 
       // senão, adiciona "No"
       saida.push(possibilidade[consulta] ? "Yes" : "No");

    // Retorna o array saida contendo as respostas para todas as consultas
    return saida;
       
}



