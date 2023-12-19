import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteHurdleRace {

    @Test
    public void testeCaso1() {

        int k = 4;
        List<Integer> largura = Arrays.asList(1, 6, 3, 5, 2);

        int esperado = 2;

        int resultado = Resultado.hurdleRace(k, largura);

        assertEquals(esperado, resultado);
    }
    
    @Test
    public void testeCaso2() {

        int k = 7;
        List<Integer> largura = Arrays.asList(2, 5, 4, 5, 2);

        int esperado = 0;

        int resultado = Resultado.hurdleRace(k, largura);

        assertEquals(esperado, resultado);
    }
}
