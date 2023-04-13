describe("Test my greet function" , function(){
    it("it should take name as parameter ,and output the greeting message 'Hello,Maya'" , function(){
        assert.equal(greet('Maya'), 'Hello, Maya');
    });
    it("it should take Sizwe as a parameter,and output  'Hello, Sizwe'" , function(){
        assert.equal(greet('Sizwe'), 'Hello, Sizwe');
    }) 
    
    it("it should return,an empty string when the parameter passed is an empty string '' " , function(){
        assert.equal(greet(''), 'Hello, ');
    })

    
});