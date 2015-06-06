describe('karma-json-fixtures-preprocessor', function() {
    it('loads the fixtures', function() {
        expect(window.__fixtures__['fixtures/1'].a).to.equal(5);
    });
});
