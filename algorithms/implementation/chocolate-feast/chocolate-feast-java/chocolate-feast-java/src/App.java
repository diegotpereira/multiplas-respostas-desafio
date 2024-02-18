import java.io.*;
import java.util.stream.IntStream;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, t).forEach(iTr -> {

            try {

                String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                int n = Integer.parseInt(primeiraMultiplaEntrada[0]);

                int c = Integer.parseInt(primeiraMultiplaEntrada[1]);

                int m = Integer.parseInt(primeiraMultiplaEntrada[2]);

                int resultado = Resultado.chocolateFeast(n, c, m);

                bufferedWriter.write(String.valueOf(resultado));
                bufferedWriter.newLine();
                
            } catch (IOException e) {
                
                throw new RuntimeException(e);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
