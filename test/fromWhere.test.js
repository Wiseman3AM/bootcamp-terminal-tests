
import assert from 'assert';
import fromWhere from '../function/fromWhere.js';
import { describe, it } from 'node:test';

describe('The fromWhere function', function() {
    it('should determine whether a reg number is from the Western Cape or another place', function() {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });
    
    it('should determine whether a reg number is from the Western Cape or another place', function() {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it('should determine whether a reg number is from the Western Cape or another place', function() {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it('should determine whether a reg number is from the Western Cape or another place', function() {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});