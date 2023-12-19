import assert from 'assert';

import { getTotalX } from '../js/getTotalX.js';


describe('getTotalX', function(){

    it('O número de inteiros que estão entre os conjuntos é 3', function() {

        const arr = [2, 4];
        const brr = [16, 32, 96];
        const esperado = 3;

        const resultado = getTotalX(arr, brr);

        assert.deepStrictEqual(resultado, esperado);
    });
});


describe('getTotalX', function(){

    it('O número de inteiros que estão entre os conjuntos é 0', function() {

        const arr = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91];
        const brr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const esperado = 0;

        const resultado = getTotalX(arr, brr);

        assert.deepStrictEqual(resultado, esperado);
    });
});


describe('getTotalX', function(){

    it('O número de inteiros que estão entre os conjuntos é 1', function() {

        const arr = [2];
        const brr = [20, 30, 12];
        const esperado = 1;

        const resultado = getTotalX(arr, brr);

        assert.deepStrictEqual(resultado, esperado);
    });
});

describe('getTotalX', function(){

    it('O número de inteiros que estão entre os conjuntos é 2', function() {

        const arr = [3, 9, 6];
        const brr = [36, 72];
        const esperado = 2;

        const resultado = getTotalX(arr, brr);

        assert.deepStrictEqual(resultado, esperado);
    });
});