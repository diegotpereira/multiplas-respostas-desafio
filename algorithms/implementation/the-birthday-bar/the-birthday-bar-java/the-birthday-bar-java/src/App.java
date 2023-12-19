import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> s = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", ""))
            .map(Integer::parseInt)
            .collect(toList());

        String[] primeira_multipla_entrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int d = Integer.parseInt(primeira_multipla_entrada[0]);
        int m = Integer.parseInt(primeira_multipla_entrada[1]);

        int resultado = Resultado.birthday(s, d, m);

        bufferedWriter.write(String.valueOf(resultado));

        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
        
    }
}
