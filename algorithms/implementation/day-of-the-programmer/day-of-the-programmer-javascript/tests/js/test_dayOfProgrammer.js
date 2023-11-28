import {dayOfProgrammer} from '../js/dayOfProgrammer.js';
import assert from 'assert';

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 2017 é', function() {

        let ano = 2017;
        let esperado = "13.09.2017";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 2016 é', function() {

        let ano = 2016;
        let esperado = "12.09.2016";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 1800 é', function() {

        let ano = 1800;
        let esperado = "12.09.1800";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 2015 é', function() {

        let ano = 2015;
        let esperado = "13.09.2015";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 2014 é', function() {

        let ano = 2014;
        let esperado = "13.09.2014";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 2013 é', function() {

        let ano = 2013;
        let esperado = "13.09.2013";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});

describe('dayOfProgrammer', function() {

    it('A data completa do Dia do Programador durante o ano de 2012 é', function() {

        let ano = 2012;
        let esperado = "12.09.2012";

        let resultado = dayOfProgrammer(ano);

        assert.strictEqual(resultado, esperado)
    })
});