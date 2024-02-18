import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteJumpingOnClouds {

    @Test 
    public void testeCaso1() {

        int[] c = {0, 0, 1, 0, 0, 1, 1, 0};
        int k = 2;

        int esperado = 92;

        int resultado = Resultado.jumpingOnClouds(c, k);

        assertEquals(esperado, resultado);
    }
    
    @Test 
    public void testeCaso2() {

        int[] c = {0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0};
        int k = 3;

        int esperado = 86;

        int resultado = Resultado.jumpingOnClouds(c, k);

        assertEquals(esperado, resultado);
    }

    @Test 
    public void testeCaso3() {

        int[] c = {1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1};
        int k = 19;

        int esperado = 97;

        int resultado = Resultado.jumpingOnClouds(c, k);

        assertEquals(esperado, resultado);
    }
}
