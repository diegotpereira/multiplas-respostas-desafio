import java.io.*;
import java.util.*;
import java.util.stream.IntStream;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> grades = IntStream.range(0, n).mapToObj(i -> {

            try {
                
                return bufferedReader.readLine().replaceAll("\\s+$", "");

            } catch (IOException e) {
                
                throw new RuntimeException(e);
            }
        }).map(String::trim)
        .map(Integer::parseInt)
        .collect(toList());

        List<Integer> resultado = Resultado.gradingStudents(grades);

        bufferedWriter.write(resultado.stream().map(Object::toString).collect(joining("\n")) + '\n');

        bufferedReader.close();
        bufferedWriter.close();
    }
}
