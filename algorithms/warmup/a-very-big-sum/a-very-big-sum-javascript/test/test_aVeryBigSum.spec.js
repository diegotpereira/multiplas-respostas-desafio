

import { aVeryBigSum } from '../js/app.js'

import assert from 'assert';

describe('aVeryBigSum', function() {

    it('A soma de todos os elementos da matriz 5000000015', function() {

        const resultado = aVeryBigSum(1000000001, 1000000002, 1000000003, 1000000004, 1000000005); 
        const esperado = 5000000015;
        assert.strictEqual(resultado, esperado);

    });
});