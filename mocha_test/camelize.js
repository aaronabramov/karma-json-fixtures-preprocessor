import camelize from '../camelize';
import {expect} from 'chai';

describe('camelize', () => {
    it('camelize replaces', () => {
        expect(camelize('aa_bb-cc')).to.equal('aaBbCc');
        expect(camelize('a_b-c')).to.equal('aBC');
    });

    it('removes -_ in the beggining and the end of the string', () => {
        expect(camelize('-abc')).to.equal('abc');
        expect(camelize('abc-')).to.equal('abc');
        expect(camelize('_abc')).to.equal('abc');
        expect(camelize('abc_')).to.equal('abc');
        expect(camelize('-_-_abc_-_-')).to.equal('abc');
    });
});
