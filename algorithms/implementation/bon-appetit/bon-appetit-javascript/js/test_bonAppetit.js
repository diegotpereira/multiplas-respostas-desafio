import { bonAppetit } from "../js/bonAppetit.js";

import assert from 'assert';

describe('bonAppetit', function() {

    it('O resultado da conta é 5', function() {

        let conta = [3, 10, 2, 9];
        let k = [1];
        let b = 12;

        let esperado = 5;

        let resultado = bonAppetit(conta, k, b)

        assert.strictEqual(esperado, resultado);
    });
});

describe('bonAppetit', function() {

    it('O resultado da conta é 6', function() {

        let conta = [72, 53, 60, 66, 90, 62, 12, 31, 36, 94];
        let k = [6];
        let b = 288;

        let esperado = 6;

        let resultado = bonAppetit(conta, k, b)

        assert.strictEqual(esperado, resultado);
    });
});

describe('bonAppetit', function() {

    it('O resultado da conta é Bon Appetit', function() {

        let conta = [40, 39, 97, 5, 2, 84, 35, 93, 59, 39];
        let k = [2];
        let b = 198;

        let esperado = 'Bon Appetit';

        let resultado = bonAppetit(conta, k, b)

        assert.strictEqual(esperado, resultado);
    });
});