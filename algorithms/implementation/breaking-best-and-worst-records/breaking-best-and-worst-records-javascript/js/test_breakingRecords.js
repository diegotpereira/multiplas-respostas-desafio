import {breakingRecords} from '../js/breakingRecords.js'

import assert from 'assert';

describe('breakingRecords', function () {

    it(' O número de vezes que ela quebrou seus recordes é minimo 0 e no máximo 4', function(){

        let pontuacoes = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
        let esperado = [4, 0];

        let resultado = breakingRecords(pontuacoes);

        assert.deepStrictEqual(resultado, esperado);

    });
    
});

describe('breakingRecords', function () {

    it(' O número de vezes que ela quebrou seus recordes é minimo 2 e no máximo e 4', function(){

        let pontuacoes = [10, 5, 20, 20, 4, 5, 2, 25, 1];
        let esperado = [2, 4];

        let resultado = breakingRecords(pontuacoes);

        assert.deepStrictEqual(resultado, esperado);

    });
    
});

describe('breakingRecords', function () {

    it(' O número de vezes que ela quebrou seus recordes é minimo 1 e no máximo e 5', function(){

        let pontuacoes = [17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50];
        let esperado = [5, 1];

        let resultado = breakingRecords(pontuacoes);

        assert.deepStrictEqual(resultado, esperado);

    });
    
});
