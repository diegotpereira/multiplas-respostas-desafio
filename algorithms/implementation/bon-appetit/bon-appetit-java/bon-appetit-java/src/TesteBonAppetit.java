import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteBonAppetit {

    @Test
    public void testeCaso1() {

        List<Integer> conta = Arrays.asList(3, 10, 2, 9); 
        int k = 1;
        int b = 12;
        String esperado = "5";
        String resultado = Resultado.bonAppetit(conta, k, b);

        assertEquals(resultado, esperado);
        
    }
    
    @Test
    public void testeCaso2() {

        List<Integer> conta = Arrays.asList(3, 10, 2, 9); 
        int k = 1;
        int b = 7;
        String esperado = "Bon Appetit";
        String resultado = Resultado.bonAppetit(conta, k, b);

        assertEquals(resultado, esperado);
        
    }
}
