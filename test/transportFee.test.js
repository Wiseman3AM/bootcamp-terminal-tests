
import assert from 'assert';
import transportFee from '../function/transportFee.js';
import { describe, it } from 'node:test';



describe('The transportFee function' , function(){
    it('Calculates the total transport fee depending on shifts.' , function(){
        assert.equal(transportFee('morning'), 'R20');
    })
        it('Calculates the total transport fee depending on shifts.' , function(){
            assert.equal(transportFee('afternoon'), 'R10');
        })
        it('Calculates the total transport fee depending on shifts.' , function(){
            assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        })
    });