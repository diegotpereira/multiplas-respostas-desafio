
import {countingValleys} from '../js/countingValleys.js';
import assert from 'assert';

describe('countingValleys', function() {

    it('O número de vales percorridos é 1', function() {

        let passos = 8;
        let caminho = 'UDDDUDUU';
        let esperado = 1;

        let resultado = countingValleys(passos, caminho)

        assert.strictEqual(resultado, esperado);
    });
});

describe('countingValleys', function() {

    it('O número de vales percorridos é 2', function() {

        let passos = 12;
        let caminho = 'DDUUDDUDUUUD';
        let esperado = 2;

        let resultado = countingValleys(passos, caminho)

        assert.strictEqual(resultado, esperado);
    });
});

describe('countingValleys', function() {

    it('O número de vales percorridos é 0', function() {

        let passos = 12;
        let caminho = 'UDUUUDUDDD';
        let esperado = 0;

        let resultado = countingValleys(passos, caminho)

        assert.strictEqual(resultado, esperado);
    });
});