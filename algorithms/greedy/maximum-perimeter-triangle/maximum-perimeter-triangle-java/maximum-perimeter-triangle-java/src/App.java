import java.io.*;
import java.util.*;
import java.util.stream.Stream;
import static java.util.stream.Collectors.*;


public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> sticks =  Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "")).map(Integer::parseInt).collect(toList());

        List<Integer> resultado = Resultado.maximumPerimeterTriangle(sticks);

        bufferedWriter.write(resultado.stream().map(Object::toString).collect(joining()) + "\n");

        bufferedReader.close();
        bufferedWriter.close();
        
    }
}
