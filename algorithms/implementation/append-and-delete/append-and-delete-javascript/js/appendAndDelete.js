// O objetivo do problema é determinar se uma 
// string pode ser convertida em outra usando 
// um mínimo de operações de inserção e exclusão. 
// A string de origem é S, e a string alvo é T. 
// Para cada string, podemos inserir qualquer 
// caractere no final da string, excluir qualquer 
// caractere do final da string ou adicionar qualquer 
// caractere no final da string. A tarefa é encontrar 
// o tamanho mínimo das operações necessárias para 
// transformar S em T, usando a definição fornecida.

// string s: a string inicial
// string t: a string desejada
// int k: o número exato de operações que devem ser realizadas


// Definindo a função appendAndDelete com três parâmetros: s, t e k.

export function appendAndDelete(s, t, k) {

    // Inicializando a variável índice para 0.
    let indice = 0;

    // Iniciando um loop while que continua até que o índice alcance k.
    while (indice < k) {
        
        // Verificando se a substring de t até o comprimento de s é igual a s
        // e se a diferença entre k e o índice é igual à diferença entre o comprimento de t e o comprimento de s.
        if (s === t.substring(0, s.length) && k - indice == t.length - s.length) {
            
            // Se a condição acima for verdadeira, retornar 'Yes'.
            return 'Yes';

        } else {

            // Caso contrário, remover o último caractere de s.
            s = s.slice(0, -1);

            // Incrementar o índice.
            indice += 1;
        }
    }

    // Se o loop for concluído e nenhuma condição for atendida, retornar 'No'.
    return 'No';

}