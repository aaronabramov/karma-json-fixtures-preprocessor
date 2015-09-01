describe('karma-json-fixtures-preprocessor', function() {
    it('loads the fixtures', function() {
        expect(window.__fixtures__['fixtures/1'].a).to.equal(5);
    });
    
    it('tranform fixture name to camelCase if config option camelCase set', function() {
        expect(window.__fixtures__.fooBar.foo).to.equal('bar');
    });
});
