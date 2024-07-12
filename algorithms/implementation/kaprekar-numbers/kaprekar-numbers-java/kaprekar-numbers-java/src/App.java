import java.io.*;

public class App {
    public static void main(String[] args) throws Exception {
        
        // Cria um leitor de buffer para ler entradas do console
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        // Cria um escritor de buffer para escrever saídas no console
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        // Lê a entrada do intervalo inferior e converte para inteiro
        int p = Integer.parseInt(bufferedReader.readLine().trim());

        // Lê a entrada do intervalo superior e converte para inteiro
        int q = Integer.parseInt(bufferedReader.readLine().trim());

        // Chama o método kaprekarNumbers e armazena o resultado
        String resultado = Resultado.kaprekarNumbers(p, q);

        // Imprime o resultado
        System.out.println(resultado);

        // Fecha o leitor e escritor de buffer
        bufferedReader.close();
        bufferedWriter.close();
    }
}
