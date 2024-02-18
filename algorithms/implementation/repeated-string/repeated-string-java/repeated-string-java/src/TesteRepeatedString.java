import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteRepeatedString {

    @Test
    public void testeCaso1() {

        String s = "aba";
        
        long n =  10;
        
        long esperado = 7;
        
        long resultado = Resultado.repeatedString(s, n);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        String s = "a";
        
        long n =  1000000000000L;
        
        long esperado = 1000000000000L;
        
        long resultado = Resultado.repeatedString(s, n);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        String s = "aab";
        
        long n =  882787;
        
        long esperado = 588525;
        
        long resultado = Resultado.repeatedString(s, n);

        assertEquals(resultado, esperado);
    }
}
