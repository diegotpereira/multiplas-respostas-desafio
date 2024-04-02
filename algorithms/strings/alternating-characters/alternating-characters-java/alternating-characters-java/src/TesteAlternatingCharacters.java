import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteAlternatingCharacters {

    @Test
    public void testeCaso1() {

        String s = "AAAA";
        int esperado = 3;

        int resultado = Resultado.alternatingCharacters(s);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        String s = "ABABABAB";
        int esperado = 0;

        int resultado = Resultado.alternatingCharacters(s);

        assertEquals(esperado, resultado);
    }
}
