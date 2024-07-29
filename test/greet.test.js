import assert from 'assert';
import greet from '../greet.js';
import { describe, it } from 'node:test';

describe('The greet function', function() {
    it('should greet Andrew correctly', function() {
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    
    it('should greet Wiseman correctly', function() {
        assert.equal('Hello, Wiseman', greet('Wiseman'));
    });

    it('should greet Action correctly', function() {
        assert.equal('Hello, Action', greet('Action'));
    });
});

console.log(greet("Andrew"));
console.log(greet("Wiseman"));
console.log(greet("Action"));