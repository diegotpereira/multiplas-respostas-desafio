import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;
public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int n = Integer.parseInt(primeiraMultiplaEntrada[1]);

        int m = Integer.parseInt(primeiraMultiplaEntrada[1]);

        List<String> topico = IntStream.range(0, n).mapToObj(i -> {

            try {
                

                return bufferedReader.readLine();

            } catch (IOException e) {
                
                throw new RuntimeException();
            }
        }).collect(toList());

        List<Integer> resultado = Resultado.acmTeam(topico);

        bufferedWriter.write(resultado.stream().map(Object::toString).collect(joining("\n")));
        // bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();

    }
}
