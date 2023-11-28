public class Resultado {

// O problema "Day of the Programmer" no HackerRank 
// solicita que você implemente uma função para encontrar 
// a data da transição do calendário juliano para o 
// calendário gregoriano durante o ano específico de 
// 1918. No calendário juliano, o ano 1918 é um ano 
// bissexto, mas a partir de 1919, o calendário gregoriano 
// é usado, e o 32º dia do ano é o dia 14 de fevereiro 
// (como nos anos bissextos gregorianos).

// A entrada do problema é um único inteiro representando 
// um ano. A saída esperada é uma string que representa a 
// data da transição do calendário juliano para o 
// gregoriano durante esse ano específico.

    public static String dayOfProgrammer(int ano) {

        // Número total de dias até 31 de agosto (considerando um ano não bissexto)
        int dias = 243;

        // Mês de setembro
        int mes = 9;

        // Ajuste para o ano de 1918, onde a transição ocorre em 13 de fevereiro
        if(ano == 1918) dias -= 13;

        // Verifica se o ano é antes de 1918 e é bissexto no calendário juliano
        else if(ano < 1918 && ano % 4 == 0) dias++;

        // Verifica se o ano é após 1918 e é bissexto no calendário gregoriano
        else if(ano > 1918 && ano % 4 == 0 && ano % 100 != 0) dias ++;

        // Verifica se o ano é bissexto no calendário gregoriano, considerando anos após 1918
        if(ano > 1918 && ano % 400 == 0) dias++;

        // Calcula o dia do Programador (256º dia do ano)
        int dia =  256 - dias;

        // Formata a data no formato desejado e retorna como uma string
        return String.format("%02d.%02d.%04d", dia, mes, ano);
    }
    
}
