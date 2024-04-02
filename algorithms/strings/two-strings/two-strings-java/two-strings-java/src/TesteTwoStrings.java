import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteTwoStrings {
    
    @Test
    public void testeCaso1() {

        String s1 = "hi";
        String s2 = "world";

        String esperado = "NO";

        String resultado = Resultado.twoStrings(s1, s2);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        String s1 = "wouldyoulikefries";
        String s2 = "abcabcabcabcabcabc";

        String esperado = "NO";

        String resultado = Resultado.twoStrings(s1, s2);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        String s1 = "hello";
        String s2 = "world";

        String esperado = "YES";

        String resultado = Resultado.twoStrings(s1, s2);

        assertEquals(esperado, resultado);
    }
}
