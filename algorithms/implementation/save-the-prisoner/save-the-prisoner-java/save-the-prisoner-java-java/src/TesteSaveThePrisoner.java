import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteSaveThePrisoner {

    @Test
    public void testeCaso1() {

        int n = 5;
        int m = 2;
        int s = 2;
        
        int esperado = 3;
        
        int resultado = Resultado.saveThePrisoner(n, m, s);

        assertEquals(esperado, resultado);
    }

    @Test
    public void testeCaso2(){

        int n = 5;
        int m = 2;
        int s = 2;
        
        int esperado = 3;
        
        int resultado = Resultado.saveThePrisoner(n, m, s);
        
        assertEquals(esperado, resultado); 
    }
        
        
        
    @Test
    public void testeCaso3(){

        int n = 7;
        int m = 19;
        int s = 2;
        
        int esperado = 6;
        
        int resultado = Resultado.saveThePrisoner(n, m, s);
        
        assertEquals(esperado, resultado);
    }
        
        
        
    @Test
    public void testeCaso4(){

        int n = 3;
        int m = 7;
        int s = 3;
        
        int esperado = 3;
        
        int resultado = Resultado.saveThePrisoner(n, m, s);

        assertEquals(esperado, resultado);
    }
    
}
