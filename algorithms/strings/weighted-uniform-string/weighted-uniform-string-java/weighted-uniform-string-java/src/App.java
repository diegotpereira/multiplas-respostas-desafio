import java.io.*;
import java.util.*;
import java.util.stream.IntStream;

import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String s = bufferedReader.readLine();

        int contarConsultas = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> consultas = IntStream.range(0, contarConsultas).mapToObj(i -> {

            try {

                return bufferedReader.readLine().replaceAll("\\s+$", "");
                
            } catch (IOException e) {
                
                throw new RuntimeException(e);
            }
        })
        .map(String::trim)
        .map(Integer::parseInt)
        .collect(toList());

        List<String> resultado = Resultado.weightedUniformStrings(s, consultas);

        bufferedWriter.write(resultado.stream().collect(joining("\n")));

        bufferedReader.close();
        bufferedWriter.close();
    }
}


