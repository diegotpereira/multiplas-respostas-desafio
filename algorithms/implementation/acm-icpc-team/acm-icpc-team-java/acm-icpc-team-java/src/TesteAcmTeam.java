import static org.junit.Assert.assertEquals;

import java.util.*;
import org.junit.Test;

public class TesteAcmTeam {

    @Test
    public void testeCaso1() {

        List<String> topico = Arrays.asList("10101", "11100", "11010", "00101");
        List<Integer> esperado = Arrays.asList(5, 2);
        List<Integer> resultado = Resultado.acmTeam(topico);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2() {

        List<String> topico = Arrays.asList("11101", "10101", "11001", "10111", "10000", "01110");
        List<Integer> esperado = Arrays.asList(5, 6);
        List<Integer> resultado = Resultado.acmTeam(topico);

        assertEquals(esperado, resultado);
    }
    
}
