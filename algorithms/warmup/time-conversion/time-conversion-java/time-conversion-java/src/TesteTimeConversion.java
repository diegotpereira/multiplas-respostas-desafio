import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteTimeConversion {

    @Test
    public void testeCaso1() {

        String s = "07:05:45PM";

        String esperado = "19:05:45";

        String resultado = Resultado.timeConversion(s);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        String s = "12:40:22AM";

        String esperado = "00:40:22";

        String resultado = Resultado.timeConversion(s);

        assertEquals(resultado, esperado);
    }
}
