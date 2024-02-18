
import {appendAndDelete} from '../js/appendAndDelete.js';
import assert from 'assert';

describe('appendAndDelete', function() {

    it('É possível converter s para t com número mínimo de operações necessárias?: Yes', function() {

        let s = 'hackerhappy';
        let t = 'hackerrank';
        let k = 9;

        let esperado = 'Yes';
        let resultado = appendAndDelete(s, t, k);

        assert.strictEqual(resultado, esperado)


    });
});

describe('appendAndDelete', function() {

    it('É possível converter s para t com número mínimo de operações necessárias?: Yes', function() {

        let s = 'aba';
        let t = 'aba';
        let k = 7;

        let esperado = 'Yes';
        let resultado = appendAndDelete(s, t, k);

        assert.strictEqual(resultado, esperado)


    });
});

describe('appendAndDelete', function() {

    it('É possível converter s para t com número mínimo de operações necessárias?: Yes', function() {

        let s = 'aaaaaaaaaa';
        let t = 'aaaaa';
        let k = 7;

        let esperado = 'Yes';
        let resultado = appendAndDelete(s, t, k);

        assert.strictEqual(resultado, esperado)


    });
});

describe('appendAndDelete', function() {

    it('É possível converter s para t com número mínimo de operações necessárias?: No', function() {

        let s = 'ashley';
        let t = 'ash';
        let k = 2;

        let esperado = 'No';
        let resultado = appendAndDelete(s, t, k);

        assert.strictEqual(resultado, esperado)


    });
});