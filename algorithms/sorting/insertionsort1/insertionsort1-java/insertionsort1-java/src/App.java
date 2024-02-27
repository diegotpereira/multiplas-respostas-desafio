import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream
                                .of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                .map(Integer::parseInt)
                                .collect(toList());

        List<Integer> resultado = Resultado.insertionSort1(n, arr);

        bufferedReader.close();
    }
}
