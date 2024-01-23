import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteMinimumDistances {

    @Test
    public void testeCaso1() {

        List<Integer> a = Arrays.asList(7, 1, 3, 4, 1, 7);

        int esperado = 3;

        int resultado = Resultado.minimumDistances(a);

        assertEquals(esperado, resultado);

    }
    
    @Test
    public void testeCaso2() {

        List<Integer> a = Arrays.asList(1, 2, 3, 4, 10);

        int esperado = -1;

        int resultado = Resultado.minimumDistances(a);

        assertEquals(esperado, resultado);

    }
}
