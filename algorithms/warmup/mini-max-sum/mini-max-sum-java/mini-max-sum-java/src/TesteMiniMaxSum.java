import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteMiniMaxSum {

    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(1, 2, 3, 4, 5);

        String esperado = "10 14";

        String resultado = Resultado.miniMaxSum(arr);

        assertEquals(resultado, esperado);


    }

    @Test
    public void testeCaso2() {

        List<Integer> arr = Arrays.asList(256741038, 623958417, 467905213, 714532089, 938071625);

        String esperado = "2063136757 2744467344";

        String resultado = Resultado.miniMaxSum(arr);

        assertEquals(resultado, esperado);


    }
    
}
