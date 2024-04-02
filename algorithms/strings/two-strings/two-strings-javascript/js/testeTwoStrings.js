

import {twoStrings} from '../js/twoStrings.js';
import assert from 'assert';

describe('twoStrings', function() {

    it('As strings compartilharem uma substring comum YES', function() {

        let s1 = 'hello';
        let s2 = 'world';

        let esperado = 'YES';

        let resultado = twoStrings(s1, s2);

        assert.strictEqual(resultado, esperado);
    });
});

describe('twoStrings', function() {

    it('As strings compartilharem uma substring comum NO', function() {

        let s1 = 'hi';
        let s2 = 'world';

        let esperado = 'NO';

        let resultado = twoStrings(s1, s2);

        assert.strictEqual(resultado, esperado);
    });
});

describe('twoStrings', function() {

    it('As strings compartilharem uma substring comum NO', function() {

        let s1 = 'wouldyoulikefries';
        let s2 = 'abcabcabcabcabcabc';

        let esperado = 'NO';

        let resultado = twoStrings(s1, s2);

        assert.strictEqual(resultado, esperado);
    });
});