import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteGameOfThrones {

    @Test
    public void testeCaso1() {

        String s = "aaabbbb";
        String esperado = "YES";

        String resultado = Resultado.gameOfThrones(s);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        String s = "cdefghmnopqrstuvw";
        String esperado = "NO";

        String resultado = Resultado.gameOfThrones(s);

        assertEquals(resultado, esperado);
    }
}
