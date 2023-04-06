describe("Test my countAllFromTown function" , function(){
    it("it should return , number of registration numbers in the string that is for that town" , function(){
        
        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        
        assert.deepEqual(fromStellies, ['CJ 456']);
    });
});