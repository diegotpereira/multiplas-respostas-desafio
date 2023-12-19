import {hurdleRace} from '../js/hurdleRace.js';
import assert from 'assert';

describe('hurdleRace', function() {

    it('O número mínimo de doses necessárias para o salto é 2', function() {

        let k = 4;
        let altura = [1, 6, 3, 5, 2];

        let resultado = hurdleRace(k, altura);

        let esperado = 2;

        assert.strictEqual(resultado, esperado)
    });
});

describe('hurdleRace', function() {

    it('O número mínimo de doses necessárias para o salto é 0', function() {

        let k = 7;
        let altura = [2, 5, 4, 5, 2];

        let resultado = hurdleRace(k, altura);

        let esperado = 0;

        assert.strictEqual(resultado, esperado)
    });
});