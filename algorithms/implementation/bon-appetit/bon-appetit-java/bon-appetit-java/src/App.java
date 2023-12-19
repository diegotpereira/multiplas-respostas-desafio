import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int n = Integer.parseInt(primeiraMultiplaEntrada[0]);
        int k = Integer.parseInt(primeiraMultiplaEntrada[1]);

        List<Integer> conta = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                    .map(Integer::parseInt)
                                    .collect(toList());

        int b = Integer.parseInt(bufferedReader.readLine().trim());

        String resultado = Resultado.bonAppetit(conta, k, b);

        System.out.println(resultado);

        bufferedReader.close();
    }
}
