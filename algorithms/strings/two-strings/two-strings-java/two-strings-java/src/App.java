import java.io.*;
import java.util.stream.IntStream;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int q = Integer.parseInt(bufferedReader.readLine());

        IntStream.range(0, q).forEach(qItr -> {

            
            try {

                String s1 = bufferedReader.readLine();
                String s2 = bufferedReader.readLine();

                String resultado = Resultado.twoStrings(s1, s2);

                bufferedWriter.write(resultado);
                bufferedWriter.newLine();

            } catch (IOException ex) {
                
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
