import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteFindDigits {

    @Test
    public void testeCaso1() {

        int n = 12;
        int esperado = 2;

        int resultado = Resultado.findDigits(n);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int n = 1012;
        int esperado = 3;

        int resultado = Resultado.findDigits(n);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        int n = 123456789;
        int esperado = 3;

        int resultado = Resultado.findDigits(n);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso4() {

        int n = 121;
        int esperado = 2;

        int resultado = Resultado.findDigits(n);

        assertEquals(esperado, resultado);
    }
}
