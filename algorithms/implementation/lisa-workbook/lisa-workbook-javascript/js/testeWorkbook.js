import {workbook} from '../js/workbook.js';
import assert from 'assert';

describe('workbook', function() {

    it('O número de problemas especiais na pasta de trabalho é: 4', function() {

        let n = 5;
        let k = 3;
        let arr = [4, 2, 6, 1, 10];
        
        let esperado = 4;
        
        let resultado = workbook(n, k, arr);

        assert.strictEqual(resultado, esperado);


    });
});

describe('workbook', function() {

    it('O número de problemas especiais na pasta de trabalho é: 8', function() {

        let n = 10;
        let k = 5;
        let arr = [3, 8, 15, 11, 14, 1, 9, 2, 24, 31];
        
        let esperado = 8;
        
        let resultado = workbook(n, k, arr);

        assert.strictEqual(resultado, esperado);


    });
});

describe('workbook', function() {

    it('O número de problemas especiais na pasta de trabalho é: 11', function() {

        let n = 15;
        let k = 20;
        let arr = [1, 8, 19, 15, 2, 29, 3, 2, 25, 2, 19, 26, 17, 33, 22];
        
        let esperado = 11;
        
        let resultado = workbook(n, k, arr);

        assert.strictEqual(resultado, esperado);


    });
});