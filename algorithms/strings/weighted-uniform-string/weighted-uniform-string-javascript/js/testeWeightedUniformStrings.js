
import { weightedUniformStrings } from '../js/weightedUniformStrings.js';
import assert from 'assert';

describe('weightedUniformStrings', function() {

    it('um array de strings que responde às consultas é: Yes', function() {

        let s = 'abccddde';
        let consultas = [6];
        let esperado = 'Yes';
        let resultado = weightedUniformStrings(s, consultas);

        assert.strictEqual(esperado, resultado[0]);

    });
});

describe('weightedUniformStrings', function() {

    it('um array de strings que responde às consultas é: No', function() {

        let s = 'abccddde';
        let consultas = [10];
        let esperado = 'No';
        let resultado = weightedUniformStrings(s, consultas);

        assert.strictEqual(esperado, resultado[0]);

    });
});


describe('weightedUniformStrings', function() {

    it('um array de strings que responde às consultas é: No', function() {

        let s = 'l';
        let consultas = [1];
        let esperado = 'No';
        let resultado = weightedUniformStrings(s, consultas);

        assert.strictEqual(esperado, resultado[0]);

    });
});

describe('weightedUniformStrings', function() {

    it('um array de strings que responde às consultas é: Yes', function() {

        let s = 'l';
        let consultas = [12];
        let esperado = 'Yes';
        let resultado = weightedUniformStrings(s, consultas);

        assert.strictEqual(esperado, resultado[0]);

    });
});