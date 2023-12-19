public class Resultado {

    public static void staircase(int n) {

        int contador = 1;

        while (contador <= n) {
            
            int espacos = n - contador;

            for (int i = 0; i < espacos; i++) 
                

                System.out.printf("%s", " ");
            
            for (int i = 0; i < contador; i++) 

             
                System.err.printf("%s", " #");


                
            System.out.println();

            contador ++;
            
        }
    }
    
}
