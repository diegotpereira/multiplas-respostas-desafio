import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class testeStringConstruction {

    @Test
    public void testeCaso1() {

        String s = "abcd";

        int esperado = 4;

        int resultado = Resultado.stringConstruction(s);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        String s = "abab";

        int esperado = 2;

        int resultado = Resultado.stringConstruction(s);

        assertEquals(esperado, resultado);
    }
}
