// # A tarefa do problema "The Time in Words" 
// # do HackerRank é criar um programa que receba 
// # um horário no formato de horas e minutos 
// # (no formato de 24 horas) e retorne a representação 
// # desse horário em palavras. Por exemplo, se a entrada 
// # for "5:47", o programa deve retornar "thirteen minutes 
// # to six" (treze minutos para as seis).

// Função que converte o horário em palavras
export function timeInWords(h, m) {

    // Verifica se os minutos são zero
    if (m == 0) {

        // Retorna o horário com 'o' clock
        return `${obterPalavrasHoras(h)} o' clock`;
        
    } else if (m == 15) {
        
        // Retorna a expressão "quarter past" seguida das palavras do horário
        return `quarter past ${obterPalavrasHoras(h)}`;

    } else if (m == 30) {
        
        // Retorna a expressão "half past" seguida das palavras do horário
        return `half past ${obterPalavrasHoras(h)}`;

    } else if (m == 45) {
        
        // Retorna a expressão "quarter to" seguida das palavras do próximo horário
        return `quarter to ${obterPalavrasHoras((h + 1) % 12)}`;

    } else if (m == 1) {
        
        // Retorna a expressão "minute past" seguida dos minutos e das palavras do horário
        return `${obterPalavrasMinutos(m)} minute past ${obterPalavrasHoras(h)}`;

    } else if (m < 20) {
        
        // Retorna a expressão "minutes past" seguida dos minutos e das palavras do horário
        return `${obterPalavrasMinutos(m)} minutes past ${obterPalavrasHoras(h)}`;

    } else if (m < 30) {
        
        // Retorna a expressão "minutes past" seguida dos minutos e das palavras do horário
        return `${obterPalavrasMinutos(m)} minutes past ${obterPalavrasHoras(h)}`;

    } else if (m <= 40) {
        
        // Retorna a expressão "minutes to" seguida dos minutos restantes e das palavras do próximo horário
        return `${obterPalavrasMinutos(60 - m)} minutes to ${obterPalavrasHoras((h + 1) % 12)}`;

    } else if (m == 59) {
        
        // Retorna a expressão "minute to" seguida dos minutos restantes e das palavras do próximo horário
        return `${obterPalavrasMinutos(60 - m)} minute to ${obterPalavrasHoras((h + 1) % 12)}`;

    } else {

        // Retorna a expressão "minutes to" seguida dos minutos restantes e das palavras do próximo horário
        return `${obterPalavrasMinutos(60 - m)} minutes to ${obterPalavrasHoras((h + 1) % 12)}`;
    }
    

}

// Função para obter as palavras correspondentes às horas
function obterPalavrasHoras(h) {
    
    // Mapa associativo para as horas em palavras
    const mapaHoras = new Map();

    // Preenche o mapa com as palavras correspondentes às horas
    mapaHoras.set(1, "one");
    mapaHoras.set(2, "two");
    mapaHoras.set(3, "three");
    mapaHoras.set(4, "four");
    mapaHoras.set(5, "five");
    mapaHoras.set(6, "six");
    mapaHoras.set(7, "seven");
    mapaHoras.set(8, "eight");
    mapaHoras.set(9, "nine");
    mapaHoras.set(10, "ten");
    mapaHoras.set(11, "eleven");
    mapaHoras.set(0, "twelve");

    // Retorna a palavra correspondente à hora
    return mapaHoras.get(h % 12);
}

// Função para obter as palavras correspondentes aos minutos
function obterPalavrasMinutos(m) {

    // Mapa associativo para os minutos em palavras
    const mapaMinutos = new Map();

    // Preenche o mapa com as palavras correspondentes aos minutos
    mapaMinutos.set(1, "one");
    mapaMinutos.set(2, "two");
    mapaMinutos.set(3, "three");
    mapaMinutos.set(4, "four");
    mapaMinutos.set(5, "five");
    mapaMinutos.set(6, "six");
    mapaMinutos.set(7, "seven");
    mapaMinutos.set(8, "eight");
    mapaMinutos.set(9, "nine");
    mapaMinutos.set(10, "ten");
    mapaMinutos.set(11, "eleven");
    mapaMinutos.set(12, "twelve");
    mapaMinutos.set(13, "thirteen");
    mapaMinutos.set(14, "fourteen");
    mapaMinutos.set(15, "quarter");
    mapaMinutos.set(16, "sixteen");
    mapaMinutos.set(17, "seventeen");
    mapaMinutos.set(18, "eighteen");
    mapaMinutos.set(19, "nineteen");
    mapaMinutos.set(20, "twenty");
    mapaMinutos.set(21, "twenty one");
    mapaMinutos.set(22, "twenty two");
    mapaMinutos.set(23, "twenty three");
    mapaMinutos.set(24, "twenty four");
    mapaMinutos.set(25, "twenty five");
    mapaMinutos.set(26, "twenty six");
    mapaMinutos.set(27, "twenty seven");
    mapaMinutos.set(28, "twenty eight");
    mapaMinutos.set(29, "twenty nine");
    mapaMinutos.set(30, "half");

    // Retorna a palavra correspondente ao minuto
    return mapaMinutos.get(m)

}