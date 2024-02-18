import {howManyGames} from '../js/howManyGames.js';
import assert from 'assert';

describe('howManyGames', function() {

    it(' o cliente pode comprar com a quantia disponível de: 6', function() {

        let p = 20;
        let d = 3;
        let m = 6;
        let s = 80;
        
        let esperado = 6;
        
        let resultado = howManyGames(p, d, m, s)

        assert.strictEqual(resultado, esperado);
    });
});


describe('howManyGames', function() {

    it(' o cliente pode comprar com a quantia disponível de: 7', function() {

        let p = 20 ;
        let d = 3;
        let m = 6;
        let s = 85;
        
        let esperado = 7;
        
        let resultado = howManyGames(p, d, m, s)

        assert.strictEqual(resultado, esperado);
    });
});

describe('howManyGames', function() {

    it(' o cliente pode comprar com a quantia disponível de: 99177', function() {

        let p = 16;
        let d = 2;
        let m = 1;
        let s = 9981;
        
        let esperado = 9917
        
        let resultado = howManyGames(p, d, m, s)

        assert.strictEqual(resultado, esperado);
    });
});