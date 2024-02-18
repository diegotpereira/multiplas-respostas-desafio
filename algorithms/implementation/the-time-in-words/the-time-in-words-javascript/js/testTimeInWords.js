

import {timeInWords} from '../js/timeInWords.js';
import assert from 'assert';

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: thirteen minutes to six', function () {
       
        let h = 5;
        let m = 47;

        let esperado = 'thirteen minutes to six';

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: three o clock', function () {
       
        let h = 3;
        let m = 0;

        let esperado = "three o' clock";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: twenty nine minutes past seven', function () {
       
        let h = 7;
        let m = 29;

        let esperado = "twenty nine minutes past seven";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: half past five', function () {
       
        let h = 5;
        let m = 30;

        let esperado = "half past five";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: quarter to six', function () {
       
        let h = 5;
        let m = 45;

        let esperado = "quarter to six";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: twenty five minutes to seven', function () {
       
        let h = 6;
        let m = 35;

        let esperado = "twenty five minutes to seven";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: three minutes to eleven', function () {
       
        let h = 10;
        let m = 57;

        let esperado = "three minutes to eleven";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('timeInWords', function () {
   
    it('Uma string de tempo conforme descrito é: quarter past seven', function () {
       
        let h = 7;
        let m = 15;

        let esperado = "quarter past seven";

        let resultado = timeInWords(h, m);

        assert.deepStrictEqual(resultado, esperado);
    });
});