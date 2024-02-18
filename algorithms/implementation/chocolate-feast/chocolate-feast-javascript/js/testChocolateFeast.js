import {chocolateFeast} from '../js/chocolateFeast.js';

import assert from 'assert';

describe('chocolateFeast', function() {

    it('O número total de chocolates que Brenno come é: 6', function() {

        let n = 10;
        let c = 2;
        let m = 5;
        
        let esperado = 6;
        
        let resultado = chocolateFeast(n, c, m);

        assert.strictEqual(resultado, esperado)
    });
});

describe('chocolateFeast', function() {

    it('O número total de chocolates que Brenno come é: 3', function() {

        let n = 12;
        let c = 4;
        let m = 4;
        
        let esperado = 3;
        
        let resultado = chocolateFeast(n, c, m);

        assert.strictEqual(resultado, esperado)
    });
});

describe('chocolateFeast', function() {

    it('O número total de chocolates que Brenno come é: 5', function() {

        let n = 6;
        let c = 2;
        let m = 2;
        
        let esperado = 5;
        
        let resultado = chocolateFeast(n, c, m);

        assert.strictEqual(resultado, esperado)
    });
});