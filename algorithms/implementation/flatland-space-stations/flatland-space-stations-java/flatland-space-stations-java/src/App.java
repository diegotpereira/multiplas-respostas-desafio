import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] nm = bufferedReader.readLine().split(" ");

        int n = Integer.parseInt(nm[0]);

        int m = Integer.parseInt(nm[1]);

        int[] c = new int[m];

        String[] cItems = bufferedReader.readLine().split(" ");

        // bufferedReader.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");
        bufferedReader.readLine();

        for (int i = 0; i < m; i++) {
            
            int cItem = Integer.parseInt(cItems[i]);

            c[i] = cItem;
        }

        int resultado = Resultado.flatlandSpaceStations(n, c);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
