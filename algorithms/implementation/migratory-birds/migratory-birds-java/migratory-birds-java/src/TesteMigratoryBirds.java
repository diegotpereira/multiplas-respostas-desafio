import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteMigratoryBirds {
    
    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(1, 4, 4, 4, 5, 3);
        int esperado = 4;

        int resultado = Resultado.migratoryBirds(arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        List<Integer> arr = Arrays.asList(1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4);
        int esperado = 3;

        int resultado = Resultado.migratoryBirds(arr);

        assertEquals(esperado, resultado);
    }
}
