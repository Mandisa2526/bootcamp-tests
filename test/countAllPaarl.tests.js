describe("Test my countAllPaarl function" , function(){
    it("it should return ,number of registration numbers in the string Paarl starts with 'CJ'" , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});