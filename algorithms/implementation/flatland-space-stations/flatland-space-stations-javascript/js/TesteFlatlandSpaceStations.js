

import {flatlandSpaceStations} from '../js/flatlandSpaceStations.js';

import assert from 'assert';

describe('flatlandSpaceStations', function() {

    it('A distância máxima que qualquer cidade está de uma estação espacial é: 2', function() {

        let n = 5;
        let c = [0, 4];

        let esperado = 2;

        let resultado = flatlandSpaceStations(n, c);

        assert.strictEqual(resultado, esperado);
    });
});

describe('flatlandSpaceStations', function() {

    it('A distância máxima que qualquer cidade está de uma estação espacial é: 0', function() {

        let n = 6;
        let c = [0, 1, 2, 4, 3, 5];

        let esperado = 0;

        let resultado = flatlandSpaceStations(n, c);

        assert.strictEqual(resultado, esperado);
    });
});

describe('flatlandSpaceStations', function() {

    it('A distância máxima que qualquer cidade está de uma estação espacial é: 6', function() {

        let n = 20;
        let c = [13, 1, 11, 10, 6];

        let esperado = 6;

        let resultado = flatlandSpaceStations(n, c);

        assert.strictEqual(resultado, esperado);
    });
});
