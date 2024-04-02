import java.io.*;
import java.util.*;
import java.util.stream.IntStream;
import static java.util.stream.Collectors.toList;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> arr = IntStream.range(0, n).mapToObj(i -> {

            try {
                
                return bufferedReader.readLine();

            } catch (Exception e) {
                
                throw new RuntimeException(e);
            }
        }).collect(toList());

        int resultado = Resultado.gemstones(arr);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();
        
        bufferedReader.close();
        bufferedWriter.close();
        
    }
}
