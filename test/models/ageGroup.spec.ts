import {
    describe,
    beforeEach,
    beforeEachProviders,
    expect,
    it,
    inject,
    injectAsync,
    TestComponentBuilder,
    xit
} from 'angular2/testing';

import {AGES, getAgeGroupByCutoff, AgeGroup} from '../../src/cfg/ages';
import {expectUniqueness} from '../util/set';

describe('Model: AgeGroup', () => {
    it('should create a group', () => {
        let ag = new AgeGroup(1,20);
        expect(ag.code).toBe(1);
        expect(ag.cutoff).toBe(20);
    });

    it('should return a formatted string', () => {
        let ag = new AgeGroup(0, 42);
        expect(ag.toString()).toEqual('U42');
    });

    describe('getAgeGroupByCutoff', () => {
        it('should throw for invalid lookup', () => {
            expect(() => { getAgeGroupByCutoff(-10) }).toThrowError(RangeError)
        });

        it('should return a lookup', () => {
            let ag = AGES[0];
            expect(getAgeGroupByCutoff(ag.cutoff)).toEqual(ag);
        });
    });

    describe('configuration', () => {
        it('should have unique codes', () => {
            expectUniqueness<Number>(AGES.map(ag => ag.code));
        });

        xit('should have unique cutoff ages', () => {
            expectUniqueness<Number>(AGES.map(ag => ag.cutoff));
        });
    });
});