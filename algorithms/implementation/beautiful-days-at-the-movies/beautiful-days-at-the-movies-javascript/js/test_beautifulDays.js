import {beautifulDays} from '../js/beautifulDays.js';
import assert from 'assert';

describe('beautifulDays', function() {
    
    it('O número de dias bonitos no intervalo é 2', function() {

        let i = 20;
        let j = 23;
        let k = 6;

        let esperado = 2;

        let resultado = beautifulDays(i, j, k);

        assert.strictEqual(resultado, esperado)
    });
});

describe('beautifulDays', function() {
    
    it('O número de dias bonitos no intervalo é 33', function() {

        let i = 13;
        let j = 45;
        let k = 3;

        let esperado = 33;

        let resultado = beautifulDays(i, j, k);

        assert.strictEqual(resultado, esperado)
    });
});