import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteBeautifulDays {

    @Test
    public void testeCaso1() {

        int i = 20;
        int j = 23;
        int k = 6;
        
        int esperado = 2;

        int resultado = Resultado.beautifulDays(i, j, k);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int i = 13;
        int j = 45;
        int k = 3;
        
        int esperado = 33;

        int resultado = Resultado.beautifulDays(i, j, k);

        assertEquals(resultado, esperado);
    }
    
}
