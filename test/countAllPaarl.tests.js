describe("Test my countAllPaarl function" , function(){
    it("it should return 3 ,as number of registration numbers in the string Paarl starts with 'CJ'" , function(){
       
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it("it should return 2 ,as number of registration numbers in the string Paarl starts that with 'CJ'" , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
        
    });
    it("it should return 4 ,as number of registration numbers in the string Paarl starts that with 'CJ'" , function(){

        assert.equal(4, countAllPaarl('CJ 345 123, CK 345, CJ 123, CJ 432, CJ 123'));
        
    });

});