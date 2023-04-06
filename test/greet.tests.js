describe("Test my greet function" , function(){
    it("it should return ,Maya when called with 'Maya'" , function(){
        assert.equal("Hello, Maya", greet("Maya"), "this should not be true");
    });
    it("it should return,Sizwe when called with 'Sizwe'" , function(){
        assert.equal("Hello, Sizwe" , greet("Sizwe") , "this should not be true")
    }) 

    
});