import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteCountingValleys {

    @Test
    public void testeCaso1() {

        int passos = 8;
        String caminho = "UDDDUDUU";

        int esperado = 1;

        int resultado = Resultado.countingValleys(passos, caminho);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int passos = 12;
        String caminho = "DDUUDDUDUUUD";

        int esperado = 2;

        int resultado = Resultado.countingValleys(passos, caminho);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso3() {

        int passos = 12;
        String caminho = "DDUUDDUDUUUD";

        int esperado = 2;

        int resultado = Resultado.countingValleys(passos, caminho);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso4() {

        int passos = 10;
        String caminho = "UDUUUDUDDD";

        int esperado = 0;

        int resultado = Resultado.countingValleys(passos, caminho);

        assertEquals(resultado, esperado);
    }
}
