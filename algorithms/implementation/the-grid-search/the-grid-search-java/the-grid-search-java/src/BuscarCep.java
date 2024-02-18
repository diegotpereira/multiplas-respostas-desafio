import java.io.*;
import java.net.*;

public class BuscarCep {

    String logradouro;
    String bairro;
    String cidade;
    String uf;

    public void buscarCep(String cep) {

        try {
            
            URL url = new URL("http://viacep.com.br/ws/"+ cep +"/json");
            URLConnection urlConnection = url.openConnection();
            InputStream is = urlConnection.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(is));


            StringBuilder jsonSb = new StringBuilder();

    
            br.lines().forEach(l -> jsonSb.append(l.trim()));
            // br.lines().forEach(l -> {
            //     jsonSb.append(l.trim());
            //     System.out.println(l.trim()); // Imprime cada linha no console
            // });
            
            String json = jsonSb.toString();

            // json = json.replaceAll("[{}, :]", "");
            // json = json.replaceAll("\"", "\n");

            // String array[] = json.split("\n");
            // System.out.println("Número do Cep: " + array[1]);

            if (json.contains("erro")) {
                
                System.out.println("Cep não encontrado");

                return;
            }

            this.logradouro = extrairValor(json, "logradouro");
            this.bairro = extrairValor(json, "bairro");
            this.cidade = extrairValor(json, "localidade");
            this.uf = extrairValor(json, "uf");



        } catch (IOException e) {
            
            throw new RuntimeException(e);
        }
    }
    
    private String extrairValor(String json, String chave) {

        String chaveAberta = "\"" + chave + "\":";
        int indiceChave = json.indexOf(chaveAberta);

        if (indiceChave != -1) {
            
            int indiceValor = json.indexOf("\"", indiceChave + chaveAberta.length()) + 1;
            int fimValor = json.indexOf("\"", indiceValor);

            return json.substring(indiceValor, fimValor);

        }

        return null;
    }
}
