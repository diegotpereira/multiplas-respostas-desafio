import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteHowManyGames {

    @Test
    public void testeCaso1() {

        int p = 20;
        int d = 3;
        int m = 6;
        int s = 80;
        
        int esperado = 6;
        
        int resultado = Resultado.howManyGames(p, d, m, s);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        int p = 20;
        int d = 3;
        int m = 6;
        int s = 85;
        
        int esperado = 7;
        
        int resultado = Resultado.howManyGames(p, d, m, s);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso3() {

        int p = 16;
        int d = 2;
        int m = 1;
        int s = 9981;
        
        int esperado = 9917;
        
        int resultado = Resultado.howManyGames(p, d, m, s);

        assertEquals(esperado, resultado);
    }
}
