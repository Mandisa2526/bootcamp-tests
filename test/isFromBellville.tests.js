describe("Test my isFromBellville function" , function(){
    it("it should return true , when the registration number starts with CY 'CY'" , function(){
        assert.equal(isFromBellville("CY 123"), true);
    });
    it("it should return false,when the registration number does not start with CY 'CY'" , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });

});