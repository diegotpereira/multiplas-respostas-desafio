import { divisibleSumPairs } from "../js/divisibleSumPairs.js";
import assert from 'assert';

describe('divisibleSumPairs', function() {

    it('O número de pares é 5', function() {

        const n = 6;
        const k = 3;
        const ar = [1, 3, 2, 6, 1, 2]

        const esperado = 5;

        const resultado = divisibleSumPairs(n, k, ar)

        assert.strictEqual(resultado, esperado);
    });
});

describe('divisibleSumPairs', function() {

    it('O número de pares é 1', function() {

        const n = 2;
        const k = 2;
        const ar = [8, 10]

        const esperado = 1;

        const resultado = divisibleSumPairs(n, k, ar)

        assert.strictEqual(resultado, esperado);
    });
});

describe('divisibleSumPairs', function() {

    it('O número de pares é 4', function() {

        const n = 5;
        const k = 2;
        const ar = [5, 9, 10, 7, 4]

        const esperado = 4;

        const resultado = divisibleSumPairs(n, k, ar)

        assert.strictEqual(resultado, esperado);
    });
});


describe('divisibleSumPairs', function() {

    it('O número de pares é 3', function() {

        const n = 5;
        const k = 3;
        const ar = [2, 8, 6, 8, 4]

        const esperado = 3;

        const resultado = divisibleSumPairs(n, k, ar)

        assert.strictEqual(resultado, esperado);
    });
});

describe('divisibleSumPairs', function() {

    it('O número de pares é 15', function() {

        const n = 10;
        const k = 3;
        const ar = [29, 97, 52, 86, 27, 89, 77, 19, 99, 96]

        const esperado = 15;

        const resultado = divisibleSumPairs(n, k, ar)

        assert.strictEqual(resultado, esperado);
    });
});