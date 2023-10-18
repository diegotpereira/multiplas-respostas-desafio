import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteSomarPrimeiro {

    @Test
    public void testeCaso1() {

        int a = 7;
        int b = 3;

        int esperado = 10;

        int resultado = Resultado.somarPrimeiro(a, b);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int a = 100;
        int b = 1000;

        int esperado = 1100;

        int resultado = Resultado.somarPrimeiro(a, b);

        assertEquals(esperado, resultado);
    }
}
