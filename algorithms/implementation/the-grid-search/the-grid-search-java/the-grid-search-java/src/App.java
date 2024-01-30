import java.io.*;


public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        System.out.println("Digite seu nome");
        String nomeCompleto = bufferedReader.readLine().trim();

        System.out.println("Digite sua idade");
        int idade = Integer.parseInt(bufferedReader.readLine().trim());

        System.out.println("Olá seja bem-vindo " + nomeCompleto + " você tem " + idade + " anos de idade");

        if (idade >= 18 && idade < 60) {
            
            System.out.println("Você é maior de idade!!!");

        } else if(idade < 18) {

            System.out.println("Você é menor de idade!!!");

        } else if (idade >= 60) {
            
            System.out.println("Você é uma pessoa de maior idade!!!");
        }

        boolean sair = false;

        while (!sair) {

            System.out.println("Escolha uma opção abaixo: ");

            System.out.println("Digite 1 - Para PF");
            System.out.println("Digite 2 - Para PJ");

            String acesso = bufferedReader.readLine().trim();
            
            switch (acesso) {
                case "1":
                    System.out.println("Acessando Pessoa Física...");
                    System.out.println("Aguarde...");
    
                    ViewPessoaFisica pf = new ViewPessoaFisica();
    
                    String cpf = pf.exibirCpf();
    
                    System.out.println("Seu CPF é: " + cpf);

                    break;
    
                case "2":
                    System.out.println("Acessando Pessoa Juridica...");
                    System.out.println("Aguarde...");

                    ViewPessoaJuridica pj = new ViewPessoaJuridica();

                    String cnpj = pj.exibirCpj();

                    System.out.println("Seu CNPJ é: " + cnpj);
                    break;
            
                default:

                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        }

        bufferedReader.close();
        bufferedWriter.close();
    }
}
