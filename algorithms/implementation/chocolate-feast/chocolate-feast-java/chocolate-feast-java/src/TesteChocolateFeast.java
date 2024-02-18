import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteChocolateFeast {
    
    @Test
    public void testeCaso1() {

        int n = 10;
        int c = 2;
        int m = 5;
        
        int esperado = 6;
        
        int resultado = Resultado.chocolateFeast(n, c, m);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int n = 12;
        int c = 4;
        int m = 4;
        
        int esperado = 3;
        
        int resultado = Resultado.chocolateFeast(n, c, m);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        int n = 6;
        int c = 2;
        int m = 2;
        
        int esperado = 5;
        
        int resultado = Resultado.chocolateFeast(n, c, m);

        assertEquals(resultado, esperado);
    }
}
