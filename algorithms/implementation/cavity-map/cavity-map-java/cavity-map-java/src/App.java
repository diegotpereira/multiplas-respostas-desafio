import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> grade = IntStream.range(0, n).mapToObj(i -> {

            try {
                
                return bufferedReader.readLine();

            } catch (IOException e) {
                
                throw new RuntimeException();
            }
        }).collect(toList());

        List<String> resultado = Resultado.cavityMap(grade);

        bufferedWriter.write(resultado.stream().collect(joining("\n")) + "\n");

        bufferedReader.close();
        bufferedWriter.close();
    }
}
