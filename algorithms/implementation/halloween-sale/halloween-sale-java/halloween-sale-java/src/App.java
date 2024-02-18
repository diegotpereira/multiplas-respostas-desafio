import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int p = Integer.parseInt(primeiraMultiplaEntrada[0]);

        int d = Integer.parseInt(primeiraMultiplaEntrada[1]);

        int m = Integer.parseInt(primeiraMultiplaEntrada[2]);

        int s = Integer.parseInt(primeiraMultiplaEntrada[3]);

        int resposta = Resultado.howManyGames(p, d, m, s);

        bufferedWriter.write(String.valueOf(resposta));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
