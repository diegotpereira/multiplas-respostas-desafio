import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteAVeryBigSum {

    @Test
    public void testeCaso1() {

        List<Integer> arr = Arrays.asList(1000000001, 1000000002, 1000000003, 1000000004, 1000000005);

        Long esperado = 5000000015L;

        Long resultado = Resultado.aVeryBigSum(arr);

        assertEquals(resultado, esperado);
    }
    
}
