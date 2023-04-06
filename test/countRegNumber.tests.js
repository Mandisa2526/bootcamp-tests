describe("Test my countRegNumber function" , function(){
    it("it should return the number of registration  numbers in the string , count all the registration numbers when called" , function(){
        assert.equal(countRegNumber('CA 182736'), 1);
    });
});