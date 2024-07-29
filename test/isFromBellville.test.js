
import assert from 'assert';
import isFromBellville from '../function/isFromBellville.js';
import { describe, it } from 'node:test';

describe('The isFromBellville function', function() {
    it('determines whether a reg number is from Paarl by returning a boolean', function() {
        assert.equal(isFromBellville('CY 123'), true);
    });
    
    it('determines whether a reg number is from Paarl by returning a boolean', function() {
        assert.equal(isFromBellville('CJ 123'), false);
    });
});