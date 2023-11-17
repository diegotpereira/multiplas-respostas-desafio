import java.util.List;

public class Resultado {

    public static int plusMinus(List<Integer> arr) {

        int contarPositivo = 0;
        int contarNegativo = 0;
        int contarZero = 0;

        for (int i = 0; i < arr.size(); i++) {
            
            if (arr.get(i) > 0) {
                
                contarPositivo += 1;

            } else if (arr.get(i) < 0) {
                
                contarNegativo += 1;

            } else {

                contarZero += 1;
            }
        }

        System.out.println((float)contarPositivo / arr.size());
        System.out.println((float)contarNegativo / arr.size());
        System.out.println((float)contarZero / arr.size());
        return 0;
    }
    
}
