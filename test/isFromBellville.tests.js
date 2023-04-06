describe("Test my isFromBellville function" , function(){
    it("it should return ,the registration number that starts with CY 'CY'" , function(){
        assert.equal(isFromBellville("CY 123"), true);
    });

});