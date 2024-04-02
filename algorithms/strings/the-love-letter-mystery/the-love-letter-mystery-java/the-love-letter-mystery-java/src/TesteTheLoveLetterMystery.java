import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteTheLoveLetterMystery {
    
    @Test
    public void testeCaso1() {

        String s = "abc";
        int esperado = 2;

        int resultado = Resultado.theLoveLetterMystery(s);

        assertEquals(esperado, resultado);
    }
}
