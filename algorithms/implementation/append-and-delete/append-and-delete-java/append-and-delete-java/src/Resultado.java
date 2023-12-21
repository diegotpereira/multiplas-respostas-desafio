public class Resultado {

    // public static String appendAndDelete(String s, String t, int k) {

    //     int indice = 0;
    
    //     while (indice < k) {
            
    //         // s.equals(t.substring(0, s.length())) && k - indice == t.length() - s.length()
    //         if (s.equals(t.substring(0, Math.min(t.length(), s.length()))) && k - indice == t.length() - s.length()) {
                
    //             return "Yes";
                
    //         } else {

    //             s = s.substring(0, s.length() - 1);
    
    //             indice += 1;
    //         }

    //     }

    //     return "No";
    // }
    
    public static String appendAndDelete(String s, String t, int k) {
        int i = 0;
    
        // Iterar enquanto houver operações disponíveis e as strings forem iguais no início
        while (i < k && s.length() > 0 && s.equals(t.substring(0, Math.min(t.length(), s.length())))) {
            // Reduzir a string s removendo o último caractere
            s = s.substring(0, s.length() - 1);
            i += 1;
        }
    
        // Calcular o número de operações restantes
        int operacoesRestantes = k - i;
    
        // Verificar se o restante das operações é suficiente para igualar as strings
        if (s.length() + t.length() <= k || (s.length() + t.length() - operacoesRestantes) % 2 == 0 || k >= s.length() + t.length()) {
            return "Yes";
        } else {
            return "No";
        }
    }
    
    
}



