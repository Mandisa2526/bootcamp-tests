describe("Test my isWeekDay function" , function(){
    it("it should find out , if the parameter passed is a day of the week and return false if it is not" , function(){
    
        assert.equal(isWeekday('Sunday'), false);
    });
    it("it should find out , if the parameter passed is a day of the week and return true if it is" , function(){

        assert.equal(isWeekday('Thursday'), true);
    });
    it("it should find out , if the parameter passed 'Monday' is a day of the week and return true if it is" , function(){
        assert.equal(isWeekday('Monday'), true);
    });
});