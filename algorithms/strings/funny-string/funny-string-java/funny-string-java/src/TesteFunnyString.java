import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteFunnyString {
    
    @Test
    public void testeCaso1() {

        String s = "acxz";
        String esperado = "Funny";
        
        String resultado = Resultado.funnyString(s);

        assertEquals(esperado, resultado);
    }
}
