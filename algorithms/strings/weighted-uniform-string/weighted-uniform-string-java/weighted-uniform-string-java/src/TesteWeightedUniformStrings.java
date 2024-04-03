import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteWeightedUniformStrings {

    @Test
    public void testeCaso1() {

        String s =  "abccddde";
        List<Integer> consultas = Arrays.asList(6);
        List<String> esperado = Arrays.asList("Yes"); 

        List<String> resultado = Resultado.weightedUniformStrings(s, consultas);

        assertEquals(resultado, esperado);
    }
    
}


