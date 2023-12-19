import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteCatAndMouse {
    
    @Test
    public void testeCaso1() {

        int x = 1;
        int y = 2;
        int z = 3;

        String esperado = "Cat B";

        String resultado = Resultado.catAndMouse(x, y, z);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        int x = 1;
        int y = 3;
        int z = 2;

        String esperado = "Mouse C";

        String resultado = Resultado.catAndMouse(x, y, z);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        int x = 33;
        int y = 86;
        int z = 59;

        String esperado = "Cat A";

        String resultado = Resultado.catAndMouse(x, y, z);

        assertEquals(resultado, esperado);
    }
}
