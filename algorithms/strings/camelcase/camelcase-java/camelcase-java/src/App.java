import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String s = bufferedReader.readLine().trim();

        int resultado = Resultado.camelcase(s);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();


        bufferedReader.close();
        bufferedWriter.close();
    }
}
