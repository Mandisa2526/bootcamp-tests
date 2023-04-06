describe("Test my countRegNumber function" , function(){
    it("it should return the number of registration  numbers in the string , count all the registration numbers when called" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    });
});