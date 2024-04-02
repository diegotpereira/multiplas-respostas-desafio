import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class SuperReducedString {

    @Test
    public void testeCaso1() {

        String s = "aaabccddd";
        String esperado = "abd";
        String resultado = Resultado.superReducedString(s);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        String s = "aa";
        String esperado = "Empty String";
        String resultado = Resultado.superReducedString(s);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso3() {

        String s = "baab";
        String esperado = "Empty String";
        String resultado = Resultado.superReducedString(s);

        assertEquals(resultado, esperado);
    }
}
