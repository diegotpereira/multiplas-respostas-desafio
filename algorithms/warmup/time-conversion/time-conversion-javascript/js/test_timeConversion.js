

import {timeConversion} from '../js/timeConversion.js';
import assert from 'assert';

describe('timeConversion', function() {

    it('A hora em formato de 24 horas é:', function() {

        let s = "12h40:22";
        let esperado = "00:40:22";

        let resultado = timeConversion(s);

        assert.strictEqual(resultado, esperado);
    })
})