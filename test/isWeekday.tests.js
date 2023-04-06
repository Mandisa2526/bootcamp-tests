describe("Test my isWeekDay function" , function(){
    it("it should find out , if the parameter passed is a day of the week" , function(){
        assert.equal(isWeekday('Sarturday'), false);
    });
});