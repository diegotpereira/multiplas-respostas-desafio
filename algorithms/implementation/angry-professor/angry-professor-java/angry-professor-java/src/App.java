import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, t).forEach(tItr -> {

            try {
                
                String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                int n = Integer.parseInt(primeiraMultiplaEntrada[0]);

                int k = Integer.parseInt(primeiraMultiplaEntrada[1]);

                List<Integer> a = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                        .map(Integer::parseInt)
                                        .collect(toList());

                String resultado = Resultado.angryProfessor(k, a);

                bufferedWriter.write(resultado);
                bufferedWriter.newLine();


            } catch (IOException e) {
                // TODO: handle exception
                throw new RuntimeException();
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
