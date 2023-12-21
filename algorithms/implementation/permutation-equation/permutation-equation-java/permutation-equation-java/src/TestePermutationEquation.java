import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TestePermutationEquation {

    @Test
    public void testeCaso1() {

        List<Integer> p = Arrays.asList(2, 3, 1);
        List<Integer> esperado = Arrays.asList(2, 3, 1);

        List<Integer> resposta = Resultado.permutationEquation(p);

        assertEquals(resposta, esperado);
    }
    
    @Test
    public void testeCaso2() {

        List<Integer> p = Arrays.asList(4, 3, 5, 1, 2);
        List<Integer> esperado = Arrays.asList(1, 3, 5, 4, 2);

        List<Integer> resposta = Resultado.permutationEquation(p);

        assertEquals(resposta, esperado);
    }
}
