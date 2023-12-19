import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> ar = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                .map(Integer::parseInt)
                                .collect(toList());
                            
        int resultado = Resultado.sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
