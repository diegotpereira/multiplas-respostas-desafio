import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeira_multipla_entrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int n = Integer.parseInt(primeira_multipla_entrada[0]);
        int m = Integer.parseInt(primeira_multipla_entrada[1]);

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());
        List<Integer> brr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        int total = Resultado.getTotalX(arr, brr);

        bufferedWriter.write(String.valueOf(total));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
