describe("Test my countRegNumber function" , function(){
    it("it should output number of registration numbers , as the input count registration numbers in a string" , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')

        assert.equal(regCount, 3);

        

    });
    it("it should return number of registration numbers,as the input count registration numbers in string" , function(){

        var regCount = countRegNumber('CA 182736')

        assert.equal(regCount, 1);

    });
    it("it should return one, when there is no  registration numbers in a string" , function(){

         
       var regCount = countRegNumber(' ')
       assert.equal(regCount, 1);


    });
});