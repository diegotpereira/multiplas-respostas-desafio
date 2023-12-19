import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int n = Integer.parseInt(primeiraMultiplaEntrada[0]);
        int k = Integer.parseInt(primeiraMultiplaEntrada[1]);

        List<Integer> largura = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                      .map(Integer::parseInt)
                                      .collect(toList());

        int resultado = Resultado.hurdleRace(k, largura);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
