import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteSquares {
    
    @Test
    public void testeCaso1() {

        int a = 3;
        int b = 9;

        int esperado = 2;

        int resultado = Resultado.squares(a, b);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int a = 17;
        int b = 24;

        int esperado = 0;

        int resultado = Resultado.squares(a, b);

        assertEquals(resultado, esperado);
    }
}
