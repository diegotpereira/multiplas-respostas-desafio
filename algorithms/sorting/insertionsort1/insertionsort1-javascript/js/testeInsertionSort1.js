import {insertionSort1} from '../js/insertionSort1.js';
import assert from 'assert';

describe('insertionSort1', function() {

    it('deve retornar um array ordenado em ordem não decrescente [2, 3, 4, 6, 8]', function() {

        let n = 5;
        let arr = [2, 4, 6, 8, 3];
        let esperado = [2, 3, 4, 6, 8];

        let resultado = insertionSort1(n, arr);

        assert.deepStrictEqual(resultado, esperado);
    });
});