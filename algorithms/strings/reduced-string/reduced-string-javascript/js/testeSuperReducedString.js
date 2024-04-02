

import {superReducedString} from '../js/superReducedString.js';
import assert from 'assert';

describe('superReducedString', function(){

    it('A string reduzida ou Empty String ? abd', function() {

        let s = 'aaabccddd';
        let esperado = 'abd';

        let resultado = superReducedString(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('superReducedString', function(){

    it('A string reduzida ou Empty String ? Empty String', function() {

        let s = 'aa';
        let esperado = 'Empty String';

        let resultado = superReducedString(s);

        assert.strictEqual(resultado, esperado);
    });
});

describe('superReducedString', function(){

    it('A string reduzida ou Empty String ? Empty String', function() {

        let s = 'baab';
        let esperado = 'Empty String';

        let resultado = superReducedString(s);

        assert.strictEqual(resultado, esperado);
    });
});