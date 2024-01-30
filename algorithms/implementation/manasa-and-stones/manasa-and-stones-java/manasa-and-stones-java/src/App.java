import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, T).forEach(tItr -> {

            try {
                
                int n = Integer.parseInt(bufferedReader.readLine().trim());

                int a = Integer.parseInt(bufferedReader.readLine().trim());

                int b = Integer.parseInt(bufferedReader.readLine().trim());

                List<Integer> resultado = Resultado.stones(n, a, b);

                bufferedWriter.write(resultado.stream().map(Object::toString).collect(joining(" ")) + "\n");

            } catch (IOException e) {
                
                throw new RuntimeException(e);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
