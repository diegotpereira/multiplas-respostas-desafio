import java.io.*;
import java.util.*;
import java.util.stream.IntStream;
import static java.util.stream.Collectors.*;

public class main {
    
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, t).forEach(iTr -> {

            try {
                
                String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                int R = Integer.parseInt(primeiraMultiplaEntrada[0]);

                int C = Integer.parseInt(primeiraMultiplaEntrada[1]);

                List<String> G = IntStream.range(0, R).mapToObj(i -> {

                    try {
                        
                        return bufferedReader.readLine();

                    } catch (IOException e) {
                        
                        throw new RuntimeException(e);
                    }
                }).collect(toList());

                String[] segundaMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                int r = Integer.parseInt(segundaMultiplaEntrada[0]);

                int c = Integer.parseInt(segundaMultiplaEntrada[1]);

                List<String> P = IntStream.range(0, R).mapToObj(i -> {

                    try {
                        
                        return bufferedReader.readLine();

                    } catch (IOException e) {
                        
                        throw new RuntimeException(e);
                    }
                }).collect(toList());

                String resultado = Resultado.gridSearch(G, P);

                bufferedWriter.write(resultado);
                bufferedWriter.newLine();
                

            } catch (IOException e) {
                
                throw new RuntimeException(e);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
