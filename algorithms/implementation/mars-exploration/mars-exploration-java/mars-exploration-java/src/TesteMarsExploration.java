import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteMarsExploration {
    
    @Test
    public void testeCaso1() {

        String s = "SOSSPSSQSSOR";
        int esperado = 3;

        int resultado = Resultado.marsExploration(s);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        String s = "SOSSOT";
        int esperado = 1;

        int resultado = Resultado.marsExploration(s);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso3() {

        String s = "SOSSOSSOS";
        int esperado = 0;

        int resultado = Resultado.marsExploration(s);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso4() {

        String s = "SOSSTSSMS";
        int esperado = 2;

        int resultado = Resultado.marsExploration(s);

        assertEquals(esperado, resultado);
    }
}
