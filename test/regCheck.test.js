
import assert from 'assert';
import regCheck from '../function/regCheck.js';
import { describe, it } from 'node:test';











describe('The regCheck function', function() {
    it('should determine whether a reg number is from a South African province', function() {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    
    it('should determine whether a reg number is from a South African province', function() {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    });

    it('should determine whether a reg number is from a South African province', function() {
        assert.equal(regCheck('5566 L', 'L'), true);

    });

    it('should determine whether a reg number is from a South African province', function() {
 assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('should determine whether a reg number is from a South African province', function() {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('should determine whether a reg number is from a South African province', function() {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('should determine whether a reg number is from a South African province', function() {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);;
    });
});