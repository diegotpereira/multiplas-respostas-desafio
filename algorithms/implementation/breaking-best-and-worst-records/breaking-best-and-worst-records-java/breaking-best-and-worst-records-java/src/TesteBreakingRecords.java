import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteBreakingRecords {

    @Test
    public void testeCaso1() {

        List<Integer> pontuacoes = Arrays.asList(3, 4, 21, 36, 10, 28, 35, 5, 24, 42);
        List<Integer> esperado = Arrays.asList(4, 0);

        List<Integer> resultado = Resultado.breakingRecords(pontuacoes);

        assertEquals(resultado, esperado);
    }
    
    @Test
    public void testeCaso2() {

        List<Integer> pontuacoes = Arrays.asList(10, 5, 20, 20, 4, 5, 2, 25, 1);
        List<Integer> esperado = Arrays.asList(2, 4);

        List<Integer> resultado = Resultado.breakingRecords(pontuacoes);

        assertEquals(resultado, esperado);
    }

    @Test
    public void testeCaso3() {

        List<Integer> pontuacoes = Arrays.asList(17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50);
        List<Integer> esperado = Arrays.asList(5, 1);

        List<Integer> resultado = Resultado.breakingRecords(pontuacoes);

        assertEquals(resultado, esperado);
    }
}
