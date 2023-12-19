import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(bufferedReader.readLine().trim());
        int p = Integer.parseInt(bufferedReader.readLine().trim());

        int resultado = Resultado.pageCount(n, p);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();
        
        bufferedReader.close();
        bufferedWriter.close();
    }
}
