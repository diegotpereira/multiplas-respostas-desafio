import java.util.*;

public class Resultado {

    // # A tarefa do problema "The Time in Words" 
    // // # do HackerRank é criar um programa que receba 
    // // # um horário no formato de horas e minutos 
    // // # (no formato de 24 horas) e retorne a representação 
    // // # desse horário em palavras. Por exemplo, se a entrada 
    // // # for "5:47", o programa deve retornar "thirteen minutes 
    // // # to six" (treze minutos para as seis).

    // Método principal que converte o tempo em palavras
    public static String timeInWords(int h, int m) {
        
        // Verifica se os minutos são zero
        if (m == 0) {
            
            // Retorna a hora seguida de "o' clock"
            return String.format("%s o' clock",obterPalavrasHoras(h));

        // Verifica se os minutos são 15
        } else if (m == 15) {
            
            // Retorna "quarter past" seguido da hora
            return String.format("quarter past %s", obterPalavrasHoras(h));

        // Verifica se os minutos são 30
        } else if(m == 30){

            // Retorna "half past" seguido da hora
            return String.format("half past %s", obterPalavrasHoras(h));

        // Verifica se os minutos são 45
        } else if (m == 45) {
            
            // Retorna "quarter to" seguido da próxima hora
            return String.format("quarter to %s", obterPalavrasHoras((h + 1) % 12));

        // Verifica se os minutos são 1
        } else if (m == 1) {
            
            // Retorna "one minute past" seguido da hora
            return String.format("%s minute past %s", obterPalavrasMinutos(m), obterPalavrasHoras(h));

        // Verifica se os minutos são menores que 20 e diferentes de 15
        } else if (m < 20) {
            
            // Retorna os minutos seguidos de "minutes past" e a hora
            return String.format("%s minutes past %s", obterPalavrasMinutos(m), obterPalavrasHoras(h));

        // Verifica se os minutos são menores que 30
        } else if (m < 30) {
            
            // Retorna os minutos seguidos de "minutes past" e a hora
            return String.format("%s minutes past %s", obterPalavrasMinutos(m), obterPalavrasHoras(h));

        // Verifica se os minutos estão entre 31 e 40
        } else if (m <= 40) {
            
            // Retorna os minutos restantes para 60 seguidos de "minutes to" e a próxima hora
            return String.format("%s minutes to %s", obterPalavrasMinutos(60 - m), obterPalavrasHoras((h + 1) % 12));

        // Verifica se os minutos são 59
        } else if (m == 59) {
            
            // Retorna os minutos restantes para 60 seguidos de "minute to" e a próxima hora
            return String.format("%s minute to %s", obterPalavrasMinutos(60 - m), obterPalavrasHoras((h + 1) % 12));

        // Para outros casos de minutos
        }else {

            // Retorna os minutos restantes para 60 seguidos de "minutes to" e a próxima hora
            return String.format("%s minutes to %s", obterPalavrasMinutos(60 - m), obterPalavrasHoras((h + 1) % 12));
        }
    }
    
    // Método auxiliar para obter as palavras que representam as horas
    private static String obterPalavrasHoras(int h) {

        // Mapa que mapeia os números das horas para as palavras correspondentes
        Map<Integer, String> mapaHoras = new HashMap<>();

        mapaHoras.put(1, "one");
        mapaHoras.put(2, "two");
        mapaHoras.put(3, "three");
        mapaHoras.put(4, "four");
        mapaHoras.put(5, "five");
        mapaHoras.put(6, "six");
        mapaHoras.put(7, "seven");
        mapaHoras.put(8, "eight");
        mapaHoras.put(9, "nine");
        mapaHoras.put(10, "ten");
        mapaHoras.put(11, "eleven");
        mapaHoras.put(0, "twelve"); // Adiciona a hora 0 para representar meia-noite

        // Retorna a palavra correspondente à hora
        return mapaHoras.get(h % 12); // Usa h % 12 para garantir que o resultado esteja no intervalo de 1 a 12
    }

    // Método auxiliar para obter as palavras que representam os minutos
    private static String obterPalavrasMinutos(int m) {

        // Mapa que mapeia os números dos minutos para as palavras correspondentes
        Map<Integer, String> mapaMinutos = new HashMap<>();

        mapaMinutos.put(1, "one");
        mapaMinutos.put(2, "two");
        mapaMinutos.put(3, "three");
        mapaMinutos.put(4, "four");
        mapaMinutos.put(5, "five");
        mapaMinutos.put(6, "six");
        mapaMinutos.put(7, "seven");
        mapaMinutos.put(8, "eight");
        mapaMinutos.put(9, "nine");
        mapaMinutos.put(10, "ten");
        mapaMinutos.put(11, "eleven");
        mapaMinutos.put(12, "twelve");
        mapaMinutos.put(13, "thirteen");
        mapaMinutos.put(14, "fourteen");
        mapaMinutos.put(15, "quarter");
        mapaMinutos.put(16, "sixteen");
        mapaMinutos.put(17, "seventeen");
        mapaMinutos.put(18, "eighteen");
        mapaMinutos.put(19, "nineteen");
        mapaMinutos.put(20, "twenty");
        mapaMinutos.put(21, "twenty one");
        mapaMinutos.put(22, "twenty two");
        mapaMinutos.put(23, "twenty three");
        mapaMinutos.put(24, "twenty four");
        mapaMinutos.put(25, "twenty five");
        mapaMinutos.put(26, "twenty six");
        mapaMinutos.put(27, "twenty seven");
        mapaMinutos.put(28, "twenty eight");
        mapaMinutos.put(29, "twenty nine");
        mapaMinutos.put(30, "half");

        // Retorna a palavra correspondente aos minutos
        return mapaMinutos.get(m);
    }
}
