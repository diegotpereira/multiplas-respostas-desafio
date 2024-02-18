import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

public class App {
    public static void main(String[] args) throws Exception {

        // Configuração para leitura de entrada e saída.
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        // Lê a primeira linha contendo três valores: n, k, q
        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        // Converte os valores para inteiros
        int n = Integer.parseInt(primeiraMultiplaEntrada[0]);

        int k = Integer.parseInt(primeiraMultiplaEntrada[1]);

        int q = Integer.parseInt(primeiraMultiplaEntrada[2]);

        // Lê a segunda linha contendo os elementos do array 'a'
        List<Integer> a = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        // Lê as próximas 'q' linhas contendo as consultas
        List<Integer> consultas = IntStream.range(0, q).mapToObj(i -> {

            try {

                // Lê cada linha de consulta
                return bufferedReader.readLine().replaceAll("\\s+$", "");
                
            } catch (IOException e) {
                
                // Em caso de exceção, lança uma RuntimeException
                throw new RuntimeException();
            }
        })
        .map(String::trim)
        .map(Integer::parseInt)
        .collect(toList());

        // Chama a função circularArrayRotation da classe Resultado para obter os resultados
        List<Integer> resultado = Resultado.circularArrayRotation(a, k, consultas);

        // Escreve os resultados no bufferedWriter
        bufferedWriter.write(resultado.stream()
        .map(Object::toString).collect(joining("\n")));

        // Fecha os recursos de leitura e escrita
        bufferedReader.close();
        bufferedWriter.close();
    }
}
