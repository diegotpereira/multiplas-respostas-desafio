import java.io.*;
import java.util.*;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int n = Integer.parseInt(primeiraMultiplaEntrada[0]);

        int t = Integer.parseInt(primeiraMultiplaEntrada[1]);

        List<Integer> largura = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        List<List<Integer>> casos = new ArrayList<>();

        IntStream.range(0, t).forEach(i -> {

            try {
                
                casos.add(Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList()));

            } catch (IOException e) {
                
                throw new RuntimeException(e);
            }
        });

        List<Integer> resultado = Resultado.serviceLane(n, casos, largura);

        bufferedWriter.write(resultado.stream().map(Object::toString).collect(joining("\n")) + "\n");


        bufferedReader.close();
        bufferedWriter.close();
        
    }
}
