describe("Test my yearsAgo function" , function(){
    it("it should take in a year and  return,how many years ago that year is from the current year" , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});