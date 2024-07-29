
import assert from 'assert';
import countRegNumber from '../function/countRegNumber.js';
import { describe, it } from 'node:test';


const regCount0 = countRegNumber('CA 182736,CY 523519,CJ 812328');


const regCount1 = countRegNumber('CA 182736');

const regCount2 = countRegNumber('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123');



describe('The countRegNumber function', function() {
    it('should count reg numbers in the comma separated string', function() {
        assert.equal(regCount0, 3);
    });
    
    it('should count reg numbers in the comma separated string', function() {
        assert.equal(regCount1, 1);

    });

    it('should count reg numbers in the comma separated string', function() {
        assert.equal(regCount2, 5);

    });
});