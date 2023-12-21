import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteAppendAndDelete {


    @Test 
    public void testeCaso1() {

        String s = "aba";
        String t = "aba";
        int k = 7;

        String esperado = "Yes";

        String resultado = Resultado.appendAndDelete(s, t, k);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso2() {

        String s = "hackerhappy";
        String t = "hackerrank";
        int k = 9;

        String esperado = "Yes";

        String resultado = Resultado.appendAndDelete(s, t, k);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso3() {

        String s = "aaaaaaaaaa";
        String t = "aaaaa";
        int k = 7;

        String esperado = "Yes";

        String resultado = Resultado.appendAndDelete(s, t, k);

        assertEquals(resultado, esperado);
    }
    
    @Test 
    public void testeCaso4() {

        String s = "ashley";
        String t = "ash";
        int k = 2;

        String esperado = "No";

        String resultado = Resultado.appendAndDelete(s, t, k);

        assertEquals(resultado, esperado);
    }
}
