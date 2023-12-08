public class Resultado {

    // # A tarefa do problema é determinar 
    // # o número de dias belos entre duas datas fornecidas.

    // # Um dia é considerado belo se a diferença 
    // # entre o dia e seu dobro reverso é menor 
    // # que ou igual a uma distância específica (disparidade).


    // # Função que inverte os dígitos de um número e retorna o resultado como um inteiro.

    // Método para contar dias "perfeitos"
    public static int beautifulDays(int i, int j, int k) {

        // Inicializa o contador de dias perfeitos
        int diasPerfeitos = 0;

        // Loop através dos dias no intervalo [i, j]
        for (int dia = i; dia <= j; dia++) {
            
            // Calcula a diferença absoluta entre o dia e seu reverso
            int diferenca = Math.abs(dia - reverso(dia));

            // Verifica se a diferença é divisível por k
            if (diferenca % k == 0) {
                
                // Incrementa o contador de dias perfeitos
                diasPerfeitos += 1;
            }
        }

        // Retorna o total de dias perfeitos encontrados
        return diasPerfeitos;
    }

    // Método privado para reverter um número
    private static int reverso(int dia) {

        // Converte o número para string, reverte a string e converte de volta para inteiro
        return Integer.parseInt(new StringBuilder(Integer.toString(dia)).reverse().toString());
    }
    
}
