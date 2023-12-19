import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteDiagonalDifference {

    @Test 
    public void testeCaso1() {

        List<List<Integer>> arr = Arrays.asList(Arrays.asList(11, 2, 4), Arrays.asList(4, 5, 6), Arrays.asList(10, 8, -12));

        int esperado = 15;

        int resultado = Resultado.diagonalDifference(arr);

        assertEquals(esperado, resultado);
    }
    
}
