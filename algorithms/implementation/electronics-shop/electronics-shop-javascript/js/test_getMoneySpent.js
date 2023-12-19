import {getMoneySpent} from '../js/getMoneySpent.js';
import assert from 'assert';

describe('getMoneySpent', function() {

    it('O máximo que pode ser gasto é -1', function() {

        let teclados = ['4']
        let dispositivos = ['5']
        let b = 5

        let esperado = -1;

        let resultado = getMoneySpent(teclados, dispositivos, b);

        assert.strictEqual(resultado, esperado);
    });
});

describe('getMoneySpent', function() {

    it('O máximo que pode ser gasto é 9', function() {

        let teclados = ['3, 1'];
        let dispositivos = ['5, 2, 8'];
        let b = 10;

        let esperado = 9;

        let resultado = getMoneySpent(teclados, dispositivos, b);

        assert.strictEqual(resultado, esperado);
    });
});