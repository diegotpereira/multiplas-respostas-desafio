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

                int b = Integer.parseInt(primeiraMultiplaEntrada[0]);

                int w = Integer.parseInt(primeiraMultiplaEntrada[1]);

                String[] segundaMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                int bc = Integer.parseInt(segundaMultiplaEntrada[0]);

                int wc = Integer.parseInt(segundaMultiplaEntrada[1]);

                int z = Integer.parseInt(segundaMultiplaEntrada[2]);

                long resultado = Resultado.taumBday(b, w, bc, wc, z);

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
