import java.io.*;
import java.util.stream.IntStream;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, t).forEach(tItr -> {

            try {
                int n = Integer.parseInt(bufferedReader.readLine().trim());

                int resultado = Resultado.findDigits(n);

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
