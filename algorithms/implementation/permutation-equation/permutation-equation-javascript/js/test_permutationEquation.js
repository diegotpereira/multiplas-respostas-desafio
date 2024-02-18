import {permutationEquation} from '../js/permutationEquation.js';
import assert from 'assert';

describe('permutationEquation', function() {

    it('A sequência de permutação para cada elemento na lista é 2, 3, 1', function() {

        let q = [2, 3, 1];
        let esperado = [2, 3, 1];

        let resultado = permutationEquation(q);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('permutationEquation', function() {

    it('A sequência de permutação para cada elemento na lista é 1, 3, 5, 4, 2', function() {

        let q = [4, 3, 5, 1, 2];
        let esperado = [1, 3, 5, 4, 2];

        let resultado = permutationEquation(q);

        assert.deepStrictEqual(resultado, esperado);
    });
});