describe("Test my countRegNumber function" , function(){
    it("it should output 3 , as the input count registration numbers in a string" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')

        assert.equal(regCount, 3);

        

    });
    it("it should return 1 , as the input count registration numbers in string" , function(){

        var regCount = countRegNumber('CA 182736')

        assert.equal(regCount, 1);

    });
    it("it should return 2, the input count the registration numbers in the string" , function(){

         
       var regCount = countRegNumber(' 42665, AA 12 RT GP')
       assert.equal(regCount, 2);


    });
});