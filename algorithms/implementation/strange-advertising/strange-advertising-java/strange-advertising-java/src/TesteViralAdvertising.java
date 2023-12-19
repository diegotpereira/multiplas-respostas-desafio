import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteViralAdvertising {
    
    @Test
    public void testeCaso1() {

        int n = 3;
        int esperado = 9;

        int resultado = Resultado.viralAdvertising(n);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        int n = 4;
        int esperado = 15;

        int resultado = Resultado.viralAdvertising(n);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int n = 50;
        int esperado = 2068789129;

        int resultado = Resultado.viralAdvertising(n);

        assertEquals(esperado, resultado);
    }
}
