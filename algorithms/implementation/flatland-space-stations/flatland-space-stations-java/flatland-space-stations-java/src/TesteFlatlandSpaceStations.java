import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteFlatlandSpaceStations {

    @Test
    public void testeCaso1() {

        int n = 5;

        int[] c = {0, 4};

        int esperado = 2;

        int resultado = Resultado.flatlandSpaceStations(n, c);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int n = 6;

        int[] c = {0, 1, 2, 4, 3, 5};

        int esperado = 0;

        int resultado = Resultado.flatlandSpaceStations(n, c);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int n = 20;

        int[] c = {13, 1, 11, 10, 6};

        int esperado = 6;

        int resultado = Resultado.flatlandSpaceStations(n, c);

        assertEquals(esperado, resultado);
    }
}
