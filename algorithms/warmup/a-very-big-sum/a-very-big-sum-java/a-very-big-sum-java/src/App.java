import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int arContador = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream
            .of(bufferedReader
                .readLine()
                .replaceAll("\\s+$", "")
                .split(" "))
                .map(Integer::parseInt)
                .collect(toList()
                
            );

        long resultado = Resultado.aVeryBigSum(arr);

        // System.out.println(resultado);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
