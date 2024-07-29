import assert from 'assert';
import countAllPaarl from '../function/countAllPaarl.js';
import { describe, it } from 'node:test';

describe('The countAllPaarl function', function() {
    it('should count all reg numbers from Paarl', function() {
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
    
    it('should count all reg numbers from Paarl', function() {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
});