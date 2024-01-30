import java.io.*;


public class ViewPessoaFisica {

    public String exibirCpf() throws IOException{

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        // BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        System.out.println("Digite seu número de CPF: ");
        String cpf = bufferedReader.readLine().trim();

        return cpf;

        
    }
    
}
