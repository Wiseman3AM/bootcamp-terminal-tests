import assert from 'assert';
import itemsOver20 from '../function/itemsOver20.js';
import { describe, it } from 'node:test';

describe('The itemsOver20 function', function() {
    it('should return items with quantity over 20', function() {
        const itemList = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 3}
        ];
        const expected = [
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27}
        ];
        assert.deepEqual(itemsOver20(itemList), expected);
    });

    it('should return an empty array if no items are over the threshold', function() {
        const itemList = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 5},
            {name: 'bananas', qty: 7},
            {name: 'apples', qty: 3}
        ];
        const expected = [];
        assert.deepEqual(itemsOver20(itemList), expected);
    });

    it('should use the given threshold', function() {
        const itemList = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 3}
        ];
        const expected = [
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 10}
        ];
        assert.deepEqual(itemsOver20(itemList, 10), expected);
    });
});
