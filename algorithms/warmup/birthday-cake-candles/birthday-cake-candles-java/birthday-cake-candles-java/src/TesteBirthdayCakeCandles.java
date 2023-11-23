import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteBirthdayCakeCandles {

    @Test
    public void testeCaso1() {

        List<Integer> velas = Arrays.asList(3, 2, 1, 3);

        int esperado = 2;

        int resultado = Resultado.birthdayCakeCandles(velas);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        List<Integer> velas = Arrays.asList(18, 90, 90, 13, 90, 75, 90, 8, 90, 43);

        int esperado = 5;

        int resultado = Resultado.birthdayCakeCandles(velas);

        assertEquals(esperado, resultado);
    }
    
}
