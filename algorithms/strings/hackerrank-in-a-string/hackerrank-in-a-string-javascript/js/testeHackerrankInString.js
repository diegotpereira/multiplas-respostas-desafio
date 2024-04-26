import {hackerrankInString} from '../js/hackerrankInString.js';
import assert from 'assert';

describe('hackerrankInString', function() {

    it('A string contém a subsequência "hackerrank" na ordem exata? YES', function() {

        let s = 'hereiamstackerrank';

        let esperado = 'YES';

        let resultado = hackerrankInString(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('hackerrankInString', function() {

    it('A string contém a subsequência "hackerrank" na ordem exata? NO', function() {

        let s = 'hackerworld';

        let esperado = 'NO';

        let resultado = hackerrankInString(s);

        assert.strictEqual(resultado, esperado);
    });
});