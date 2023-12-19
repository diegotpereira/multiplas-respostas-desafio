// import { it } from 'node:test';
import {kangaroo} from './kangaroo.js';

import assert from 'assert';

describe('kangaroo', function() {

    it('sim, ambos os cangurus ocupem a mesma posição', function() {

        const x1 = 0;
        const v1 = 3;
        const x2 = 4;
        const v2 = 2;

        const esperado = "YES";

        const resultado = kangaroo(x1, v1, x2, v2);

        assert.deepStrictEqual(resultado, esperado)
    });

});

describe('kangaroo', function() {

    it('não, ambos os cangurus ocupem a mesma posição', function() {

        const x1 = 0;
        const v1 = 2;
        const x2 = 5;
        const v2 = 3;

        const esperado = "NO";

        const resultado = kangaroo(x1, v1, x2, v2);

        assert.deepStrictEqual(resultado, esperado)
    });

});