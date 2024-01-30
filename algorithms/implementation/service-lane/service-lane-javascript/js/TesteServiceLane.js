import {serviceLane} from '../js/serviceLane.js';
import assert from 'assert';

describe('serviceLane', function() {

    it('A largura máxima do veículo que pode passar por cada segmento da faixa de serviço descrita é: [1, 2, 3, 2, 1]', function() {

        let n = 8;
        
        let largura = [2, 3, 1, 2, 3, 2, 3, 3];
        let cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];
        
        let esperado = [1, 2, 3, 2, 1];
        
        let resultado = serviceLane(n, cases, largura);

        assert.deepStrictEqual(resultado, esperado);

    });
});

describe('serviceLane', function() {

    it('A largura máxima do veículo que pode passar por cada segmento da faixa de serviço descrita é: [2, 1, 1, 1, 2]', function() {

        let n = 8;
        
        let largura = [1, 2, 2, 2, 1];
        let cases = [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]];
        
        let esperado = [2, 1, 1, 1, 2];
        
        let resultado = serviceLane(n, cases, largura);

        assert.deepStrictEqual(resultado, esperado);

    });
});