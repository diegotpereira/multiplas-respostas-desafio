import java.util.List;
import java.util.ListIterator;

public class Resultado {

    // public static int simpleArraySum(List<Integer> arr) {

    //     int contador = 0;

    //     for (int i = 0; i < arr.size(); i++) {
            
    //         contador += arr.get(i);
    //     }

    //     return contador;
    // }

    // public static int simpleArraySum(List<Integer> arr) {

    //     int contador = 0;

    //     for (Integer numero : arr) {
            
    //         contador += numero;
    //     }

    //     return contador;
    // }

    // public static int simpleArraySum(List<Integer> arr) {

    //     return arr.stream().reduce(Integer::sum).get();
    // }

    // public static int simpleArraySum(List<Integer> arr) {

    //     int contador = 0;

    //     ListIterator<Integer> it = arr.listIterator();

    //     while (it.hasNext()) {
            
    //         contador += it.next();
    //     }

    //     return contador;
    // }

    public static int simpleArraySum(List<Integer> arr) {

        int contar = 0;
        int soma = arr.stream().mapToInt(s -> s.intValue()).sum();

        contar = soma;

        return contar;
    }
    
}
