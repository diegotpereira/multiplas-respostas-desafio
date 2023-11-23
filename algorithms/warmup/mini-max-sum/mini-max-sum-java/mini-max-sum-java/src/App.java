import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        
        List<Integer> arr = Stream
                                .of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                                .map(Integer::parseInt)
                                .collect(toList());

        String resultado = Resultado.miniMaxSum(arr);

        System.out.println(resultado);

        bufferedReader.close();
    }
}
