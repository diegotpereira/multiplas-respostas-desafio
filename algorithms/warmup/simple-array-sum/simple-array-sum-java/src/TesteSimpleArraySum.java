import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteSimpleArraySum {
    
    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(338, 65, 713, 595, 428, 610, 728, 573, 871, 868);

        int esperado = 5789;

        int resultado = Resultado.simpleArraySum(arr);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        List<Integer> arr = Arrays.asList(1, 2, 3, 4, 10, 11);

        int esperado = 31;

        int resultado = Resultado.simpleArraySum(arr);

        assertEquals(esperado, resultado);
    }
}
