import assert from 'assert';
import findItemsOver20 from '../function/findItemsOver20.js';
import { describe, it } from 'node:test';


const itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

const results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

const itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

const results2 = [];

const itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

const results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];




describe('The findItemsOver20 function', function() {
    it('should determine whether items are over 20', function() {
        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results, findItemsOver(itemList, 20));

    });
    
    it('should determine whether items are over 20', function() {
        assert.deepEqual(results2, findItemsOver20(itemList2));
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it('should determine whether items are over 20', function() {
        assert.deepEqual(results3, findItemsOver20(itemList3));
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});



