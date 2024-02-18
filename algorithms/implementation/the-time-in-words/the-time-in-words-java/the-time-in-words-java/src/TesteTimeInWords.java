import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TesteTimeInWords {

    @Test 
    public void testeCaso1() {

        int h = 5;
        int m = 47;

        String esperado = "thirteen minutes to six";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso2() {

        int h = 3;
        int m = 0;

        String esperado = "three o' clock";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso3() {

        int h = 7;
        int m = 29;

        String esperado = "twenty nine minutes past seven";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso4() {

        int h = 5;
        int m = 30;

        String esperado = "half past five";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso5() {

        int h = 5;
        int m = 45;

        String esperado = "quarter to six";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso6() {

        int h = 6;
        int m = 35;

        String esperado = "twenty five minutes to seven";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso7() {

        int h = 10;
        int m = 57;

        String esperado = "three minutes to eleven";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }

    @Test 
    public void testeCaso8s() {

        int h = 7;
        int m = 15;

        String esperado = "quarter past seven";

        String resultado = Resultado.timeInWords(h, m);

        assertEquals(resultado, esperado);
    }
    
}
