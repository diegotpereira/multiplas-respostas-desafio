import { simpleArraySum } from '../js/app.js'

import assert from 'assert';

describe('simpleArraySum', function() {

    it('A soma dos elementos do array é 10', function() {

        const resultado = simpleArraySum(5, 5); 
        const esperado = 10;
        assert.strictEqual(resultado, esperado);

    });
});

describe('simpleArraySum', function() {

    it('A soma dos elementos do array é 31', function() {

        const resultado = simpleArraySum(1, 2, 3, 4, 10, 11); 
        const esperado = 31;
        assert.strictEqual(resultado, esperado);

    });
});