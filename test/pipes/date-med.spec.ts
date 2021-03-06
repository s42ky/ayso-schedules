import {describe, it, fdescribe} from 'angular2/testing';
import {DateMedPipe} from '../../src/pipes/date-med.pipe';

describe('Pipe: MedDateFormat', () => {
    let pipe:DateMedPipe;

    beforeEach(() => {
        pipe = new DateMedPipe();
    });

    it('parses a date', () => {
        let d = new Date(2016, 0, 2, 8, 30, 59);
        expect(pipe.transform(d)).toEqual('Jan 2, 8:30');
    });

    it('parses shows afternoon in 12h format', () => {
        let d = new Date(2016, 8, 2, 14, 30, 59);
        console.log(d);
        expect(pipe.transform(d)).toEqual('Sept 2, 2:30');
    });

    it('shows two zeros on the hour', () => {
        let d = new Date('Sep 02 2016 14:00:00 GMT-0700');
        console.log(d);
        expect(pipe.transform(d)).toEqual('Sept 2, 2:00');
    });

    it('returns empty for invalid inputs', () => {
        expect(pipe.transform(undefined)).toEqual('');
        expect(pipe.transform(null)).toEqual('');
        expect(pipe.transform(<any>{ isDate: false })).toEqual('');
        expect(pipe.transform(<any>'')).toEqual('');
    });
});
