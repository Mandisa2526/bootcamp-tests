describe("Test my yearsAgo function" , function(){
    it(" My function should return 23, if the input is 2000" , function(){

        assert.equal(23, yearsAgo(2000));
         
    });
    it(" My function should return 48, if the input is 1976" , function(){
        assert.equal(47, yearsAgo(1976))
    });
    it(" My function should return 0 ,if the input is 2023" , function(){

        assert.equal(0, yearsAgo(2023));

    });
}); 