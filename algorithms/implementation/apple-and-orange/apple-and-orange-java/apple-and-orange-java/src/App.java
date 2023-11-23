import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int s = Integer.parseInt(primeiraMultiplaEntrada[0]);

        int t = Integer.parseInt(primeiraMultiplaEntrada[1]);

        String[] segundaMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int a = Integer.parseInt(segundaMultiplaEntrada[0]);

        int b = Integer.parseInt(segundaMultiplaEntrada[1]);

        String[] terceiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int m = Integer.parseInt(terceiraMultiplaEntrada[0]);

        int n = Integer.parseInt(terceiraMultiplaEntrada[1]);

        List<Integer> macas = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        List<Integer> laranjas = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        String resultado = Resultado.countApplesAndOranges(s, t, a, b, macas, laranjas);

        System.out.println(resultado);

        bufferedReader.close();
    }
}
