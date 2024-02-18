public class Resultado {

    // # O problema "Time Conversion" no HackerRank 
    // # pede para converter um formato de hora no 
    // # formato de 12 horas para o formato de 24 horas.

    // # A entrada é uma string representando a hora 
    // # no formato de 12 horas, por exemplo, "07:05:45PM". 
    // # A tarefa é converter essa hora para o formato de 24 horas, 
    // # que seria "19:05:45".

    // # As possíveis entradas são no formato "hh:mm:ssAM" ou "hh:mm:ssPM", onde:

    // # hh: Representa a hora em formato de 2 dígitos (01 a 12).
    // # mm: Representa os minutos em formato de 2 dígitos (00 a 59).
    // # ss: Representa os segundos em formato de 2 dígitos (00 a 59).
    // # AM ou PM: Indica se é antes ou depois do meio-dia.
    // # A saída esperada é a hora no formato de 24 horas.

    public static String timeConversion(String s) {

        // Separa a string em parte de tempo e período (AM ou PM)
        String tempo = s.substring(0, s.length() - 2);
        String periodo = s.substring(s.length() - 2);

        // Extrai hora, minuto e segundo da parte de tempo
        String[] tempoArray = tempo.split(":");

        int hora = Integer.parseInt(tempoArray[0]);
        int minuto = Integer.parseInt(tempoArray[1]);
        int segundo = Integer.parseInt(tempoArray[2]);

        // Converte para o formato de 24 horas, considerando o período
        if (periodo.equals("PM") && hora != 12) {
            
            hora += 12;

        } else if (periodo.equals("AM") && hora == 12) {
            
            hora = 0;
        }

        // Formata a saída no formato desejado
        return String.format("%02d:%02d:%02d", hora, minuto, segundo);
    }
    
}
