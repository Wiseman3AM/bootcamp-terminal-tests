
import assert from 'assert';
import countAllFromTown from '../function/countAllFromTown.js';
import { describe, it } from 'node:test';

const fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
//fromStellies should contains


const fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
//fromStellies should contains

describe('The countAllFromTown function', function () {
    it('should determine all reg numbers from Stellies', function () {
        assert.equal(fromStellies, 3);
    });

    it('should determine all reg numbers from Kuilsriver', function () {
        assert.equal(fromKuilsriver, 1);
    });
});