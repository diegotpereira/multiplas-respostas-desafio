import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int i = Integer.parseInt(primeiraMultiplaEntrada[0]);

        int j = Integer.parseInt(primeiraMultiplaEntrada[1]);

        int k = Integer.parseInt(primeiraMultiplaEntrada[2]);

        int resultado = Resultado.beautifulDays(i, j, k);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
