import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteDayOfProgrammer {
    
    @Test
    public void testeCaso1() {

        int ano = 2017;
        String esperado = "13.09.2017";

        String resultado = Resultado.dayOfProgrammer(ano);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int ano = 2016;
        String esperado = "12.09.2016";

        String resultado = Resultado.dayOfProgrammer(ano);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        int ano = 2015;
        String esperado = "13.09.2015";

        String resultado = Resultado.dayOfProgrammer(ano);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso4() {

        int ano = 2014;
        String esperado = "13.09.2014";

        String resultado = Resultado.dayOfProgrammer(ano);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso5() {

        int ano = 2013;
        String esperado = "13.09.2013";

        String resultado = Resultado.dayOfProgrammer(ano);

        assertEquals(resultado, esperado);
    }
}
