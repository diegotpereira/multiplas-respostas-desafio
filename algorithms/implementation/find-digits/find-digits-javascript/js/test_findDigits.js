import {findDigits} from '../js/findDigits.js';
import assert from 'assert';

describe('findDigits', function() {

    it('O número de dígitos no número que são divisíveis por 12 é: 2', function() {

        let n = 12;
        let esperado = 2;
        let resultado = findDigits(n);

        assert.strictEqual(resultado, esperado);
    });
});


describe('findDigits', function() {

    it('O número de dígitos no número que são divisíveis por 1012 é: 3', function() {

        let n = 1012;
        let esperado = 3;
        let resultado = findDigits(n);

        assert.strictEqual(resultado, esperado);
    });
});

describe('findDigits', function() {

    it('O número de dígitos no número que são divisíveis por 123456789 é: 3', function() {

        let n = 123456789;
        let esperado = 3;
        let resultado = findDigits(n);

        assert.strictEqual(resultado, esperado);
    });
});

describe('findDigits', function() {

    it('O número de dígitos no número que são divisíveis por 121 é: 2', function() {

        let n = 121;
        let esperado = 2;
        let resultado = findDigits(n);

        assert.strictEqual(resultado, esperado);
    });
});