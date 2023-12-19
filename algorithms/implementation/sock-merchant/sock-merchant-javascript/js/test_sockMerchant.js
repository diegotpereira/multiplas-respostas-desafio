import {sockMerchant} from '../js/sockMerchant.js';
import assert from 'assert';

describe('sockMerchant', function() {

    it('O número de pares é 3', function() {

        let n = 9;
        
        let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

        let esperado = 3;

        let resultado = sockMerchant(n, ar);

        assert.strictEqual(resultado, esperado);


    });
});

describe('sockMerchant', function() {

    it('O número de pares é 4', function() {

        let n = 10;
        
        let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

        let esperado = 4;

        let resultado = sockMerchant(n, ar);

        assert.strictEqual(resultado, esperado);


    });
});

describe('sockMerchant', function() {

    it('O número de pares é 6', function() {

        let n = 15;
        
        let ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

        let esperado = 6;

        let resultado = sockMerchant(n, ar);

        assert.strictEqual(resultado, esperado);


    });
});

describe('sockMerchant', function() {

    it('O número de pares é 9', function() {

        let n = 20;
        
        let ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]

        let esperado = 9;

        let resultado = sockMerchant(n, ar);

        assert.strictEqual(resultado, esperado);


    });
});