import java.io.*;

public class ViewPessoaJuridica {
    
    public String exibirCpj() throws IOException{

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        // BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        System.out.println("Digite seu número de CPJ: ");
        String cpj = bufferedReader.readLine().trim();

        return cpj;

        
    }
}
