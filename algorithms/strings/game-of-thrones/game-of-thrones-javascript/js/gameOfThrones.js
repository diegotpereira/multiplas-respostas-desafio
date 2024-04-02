// # A tarefa do problema "Game of Thrones - I" 
// # no HackerRank é determinar se é possível 
// # reorganizar as letras de uma string para 
// # formar um palíndromo. Um palíndromo é uma 
// # palavra que permanece a mesma se lida de 
// # trás para frente. Se a reorganização das 
// # letras da string puder formar um palíndromo, 
// # o programa deve imprimir "YES", caso contrário,
// # deve imprimir "NO".

// Exporta a função gameOfThrones como uma função nomeada
export function gameOfThrones(s) {
    
    // Converte a string s em um array de caracteres e ordena em ordem alfabética
    const charArr = [...s].sort();

    // Cria um objeto para contar as ocorrências de cada caractere
    const contarCaracter = {}

    // Itera sobre cada caractere no array charArr
    charArr.forEach(c => {

        // Verifica se o caractere já existe no objeto contarCaracter
        if (contarCaracter[c]) {
            
            // Se sim, incrementa a contagem de ocorrências desse caractere
            contarCaracter[c]++;

        } else {

            // Se não, adiciona o caractere ao objeto com uma contagem de 1
            contarCaracter[c] = 1;
        }
    });

    // Inicializa um contador para contar o número de caracteres com ocorrências ímpares
    let contarImpar = 0;

    // Itera sobre os valores do objeto contarCaracter
    for(const contador of Object.values(contarCaracter)) {

        // Verifica se o contador é ímpar
        if (contador % 2 !== 0) {
            
            // Se sim, incrementa o contador de caracteres com ocorrências ímpares
            contarImpar++;

        }

        // Se houver mais de um caractere com ocorrências ímpares, 
        // não é possível formar um palíndromo
        if (contarImpar > 1) {
            
            // Retorna "NO"
            return "NO";
        }
    }

    // Se não houver mais de um caractere com ocorrências ímpares, é possível formar um palíndromo
    // Retorna "YES"
    return "YES";
}

