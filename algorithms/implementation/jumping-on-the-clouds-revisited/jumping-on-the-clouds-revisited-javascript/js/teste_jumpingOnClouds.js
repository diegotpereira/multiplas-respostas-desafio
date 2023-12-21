import {jumpingOnClouds} from '../js/jumpingOnClouds.js';
import assert from 'assert';

describe('jumpingOnClouds', function() {

    it('O número mínimo de saltos necessários é: 92', function() {

        let c = [0, 0, 1, 0, 0, 1, 1, 0];
        let k = 2;

        let esperado = 92;

        let resultado = jumpingOnClouds(c, k);

        assert.strictEqual(resultado, esperado);


    });
});

describe('jumpingOnClouds', function() {

    it('O número mínimo de saltos necessários é: 86', function() {

        let c = [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0];
        let k = 3;

        let esperado = 86;

        let resultado = jumpingOnClouds(c, k);

        assert.strictEqual(resultado, esperado);


    });
});

describe('jumpingOnClouds', function() {

    it('O número mínimo de saltos necessários é: 97', function() {

        let c = [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1];
        let k = 19;

        let esperado = 97;

        let resultado = jumpingOnClouds(c, k);

        assert.strictEqual(resultado, esperado);


    });
});