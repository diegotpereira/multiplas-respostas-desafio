import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class testeCamelcase {

    @Test
    public void testeCaso1() {

        String s = "fraseComTres";
        int esperado = 3;

        int resultado = Resultado.camelcase(s);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        String s = "fraseComQuatroPalavras";
        int esperado = 4;

        int resultado = Resultado.camelcase(s);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        String s = "palavra";
        int esperado = 1;

        int resultado = Resultado.camelcase(s);

        assertEquals(resultado, esperado);
    }
}
