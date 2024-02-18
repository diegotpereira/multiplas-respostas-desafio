import {acmTeam} from '../js/acmTeam.js';
import assert from 'assert';

describe('acmTeam', function() {

    it('O máximo de tópicos e o número de equipes que conhecem tantos tópicos é 5, 2', function() {

        let topicos = ['10101', '11100', '11010', '00101'];
        let esperados = [5, 2];

        let resultado = acmTeam(topicos);

        assert.deepStrictEqual(resultado, esperados);
    });
});

describe('acmTeam', function() {

    it('O máximo de tópicos e o número de equipes que conhecem tantos tópicos é 5, 6', function() {

        let topicos = ['11101', '10101', '11001', '10111', '10000', '01110'];
        let esperados = [5, 6];

        let resultado = acmTeam(topicos);

        assert.deepStrictEqual(resultado, esperados);
    });
});