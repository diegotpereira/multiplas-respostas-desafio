import {fairRations} from '../js/fairRations.js';
import assert from 'assert';

describe('fairRations', function() {

    it('O número mínimo de pães necessários é: 4', function() {

        let B = [2, 3, 4, 5, 6];

        let esperado = 4;

        let resultado = fairRations(B);

        assert.strictEqual(resultado, esperado);
    });
});

describe('fairRations', function() {

    it('O número mínimo de pães necessários é: NO', function() {

        let B = [1, 2];

        let esperado = 'NO';

        let resultado = fairRations(B);

        assert.strictEqual(resultado, esperado);
    });
});