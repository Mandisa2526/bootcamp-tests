describe("Test my greet function" , function(){
    it("it should return ,Maya when called with 'Maya'" , function(){
        assert.equal(greet('Maya'), 'Hello, Maya');
    });
    it("it should return,Sizwe when called with 'Sizwe'" , function(){
        assert.equal(greet('Sizwe'), 'Hello, Sizwe');
    }) 
    it("it should return,Bob when called with 'Bob'" , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
    })
    it("it should return,empty string when called with an empty string '' " , function(){
        assert.equal(greet(''), 'Hello, ');
    })

    
});