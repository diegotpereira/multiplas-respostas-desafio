import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] primeiraMultiplaEntrada = bufferedReader.readLine().split(" ");

        int n = Integer.parseInt(primeiraMultiplaEntrada[0]);
        int k = Integer.parseInt(primeiraMultiplaEntrada[1]);

        int[] c = new int[n];

        String[] cItems = bufferedReader.readLine().split(" ");

        // bufferedReader.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {

            int cItem = Integer.parseInt(cItems[i]);

            c[i] = cItem;
            
        }

        int resultado = Resultado.jumpingOnClouds(c, k);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
