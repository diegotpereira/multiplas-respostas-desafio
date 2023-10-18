import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int a = Integer.parseInt(bufferedReader.readLine().trim());
        int b = Integer.parseInt(bufferedReader.readLine().trim());

        int soma;

        soma = Resultado.somarPrimeiro(a, b);

        System.out.println(soma);

        bufferedReader.close();
        bufferedWriter.close();
        
    }
}
