import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteHappyLadybugs {

    @Test
    public void testeCaso1() {

        String b = "RBY_YBR";

        String esperado = "YES";

        String resultado = Resultado.happyLadybugs(b);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso2() {

        String b = "X_Y__X";

        String esperado = "NO";

        String resultado = Resultado.happyLadybugs(b);

        assertEquals(resultado, esperado);
    }
    
}
