import assert from 'assert';
import yearsAgo from '../function/yearsAgo.js';
import { describe, it } from 'node:test';


describe('yearsAgo' , function(){
    it('returns how many years it is from a specific year' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))});
        it('returns how many years it is from a specific year' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))});
        it('returns how many years it is from a specific year' , function(){
        assert.equal((new Date().getFullYear() - 1830), yearsAgo(1830))});
    });