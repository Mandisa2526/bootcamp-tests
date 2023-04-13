describe("Test my yearsAgo function" , function(){
    it("should return how many years ago, the input is from the current year" , function(){
        assert.equal(23, yearsAgo(2000));  
    });
    it("should return 28, if the input is from 1995" , function(){
        assert.equal(28, yearsAgo(1995));  
    });
    it("should return 56 , if the input is from 1995" , function(){
        assert.equal(56, yearsAgo(1967));  
    });


}); 