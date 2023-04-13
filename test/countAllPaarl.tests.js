describe("Test my countAllPaarl function" , function(){
    it("it should take a parameter string ,and return the number of registration numbers in a string for Paarl'CJ'" , function(){
       
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it("it should return false ,as registration numbers does not starts  with 'CJ' for Paarl" , function(){
        assert.equal(false, countAllPaarl('CA123'));
        
    });
    it("it should return false,as input passed in the string parameter is empty" , function(){

        assert.equal(false, countAllPaarl(''));
        
    });

});