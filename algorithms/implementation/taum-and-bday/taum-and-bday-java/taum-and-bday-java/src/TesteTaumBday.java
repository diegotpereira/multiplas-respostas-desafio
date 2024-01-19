import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteTaumBday {

    @Test
    public void testeCaso1() {

        int b = 10;
        int w = 10;
        int bc = 1;
        int wc = 1;
        int z = 1;
        
        long esperado = 20;
        
        long resultado = Resultado.taumBday(b, w, bc, wc, z);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int b = 5;
        int w = 9;
        int bc = 2;
        int wc = 3;
        int z = 4;
        
        long esperado = 37;
        
        long resultado = Resultado.taumBday(b, w, bc, wc, z);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int b = 3;
        int w = 6;
        int bc = 9;
        int wc = 1;
        int z = 1;
        
        long esperado = 12;
        
        long resultado = Resultado.taumBday(b, w, bc, wc, z);

        assertEquals(esperado, resultado);
    }
}
