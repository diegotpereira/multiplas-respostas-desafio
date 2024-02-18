import {circularArrayRotation} from '../js/circularArrayRotation.js';
import assert from 'assert';

describe('circularArrayRotation', function() {

    it('os valores rotacionados conforme solicitado são: [2, 3, 1]', function() {

        let a = [1, 2, 3]
        let k = 2;
        let consultas = [0, 1, 2];
        
        let esperado = [2, 3, 1];

        let resultado = circularArrayRotation(a, k, consultas);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('circularArrayRotation', function() {

    it('os valores rotacionados conforme solicitado são: [5, 3]', function() {

        let a = [3, 4, 5]
        let k = 2;
        let consultas = [1, 2];
        
        let esperado = [5, 3];

        let resultado = circularArrayRotation(a, k, consultas);

        assert.deepStrictEqual(resultado, esperado);
    });
});