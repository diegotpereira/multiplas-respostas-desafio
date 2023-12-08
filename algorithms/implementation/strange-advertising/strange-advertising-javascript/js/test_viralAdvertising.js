import {viralAdvertising} from '../js/viralAdvertising.js';
import assert from 'assert';

describe('viralAdvertising', function() {

    it('As curtidas acumuladas naquele dia é 9', function() {

        let n = 3;
        let esperado = 9;

        let resultado = viralAdvertising(n);

        assert.strictEqual(resultado, esperado);
    });
});

describe('viralAdvertising', function() {

    it('As curtidas acumuladas naquele dia é 15', function() {

        let n = 4;
        let esperado = 15;

        let resultado = viralAdvertising(n);

        assert.strictEqual(resultado, esperado);
    });
});

describe('viralAdvertising', function() {

    it('As curtidas acumuladas naquele dia é 2068789129', function() {

        let n = 50;
        let esperado = 2068789129;

        let resultado = viralAdvertising(n);

        assert.strictEqual(resultado, esperado);
    });
});