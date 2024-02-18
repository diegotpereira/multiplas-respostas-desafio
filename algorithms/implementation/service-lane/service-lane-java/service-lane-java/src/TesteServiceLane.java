import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteServiceLane {

    @Test
    public void testeCaso1() {

        int n = 8;
        
        List<Integer> largura = Arrays.asList(2, 3, 1, 2, 3, 2, 3, 3);
        List<List<Integer>> cases = Arrays.asList(Arrays.asList(0 ,3), Arrays.asList(4, 6), Arrays.asList(6, 7), Arrays.asList(3, 5), Arrays.asList(0, 7));
        
        List<Integer> esperado = Arrays.asList(1, 2, 3, 2, 1);
        
        List<Integer> resultado = Resultado.serviceLane(n, cases, largura);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        int n = 8;
        
        List<Integer> largura = Arrays.asList(1, 2, 2, 2, 1);
        List<List<Integer>> cases = Arrays.asList(Arrays.asList(2, 3), Arrays.asList(1, 4), Arrays.asList(2, 4), Arrays.asList(2, 4), Arrays.asList(2, 3));
        
        List<Integer> esperado = Arrays.asList(2, 1, 1, 1, 2);
        
        List<Integer> resultado = Resultado.serviceLane(n, cases, largura);

        assertEquals(resultado, esperado);
    }
}
