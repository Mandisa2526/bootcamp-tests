describe("Test my countAllFromTown function" , function(){
    it("it should return , number of registration numbers in the string that is for that town" , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(fromKuilsriver, 1)

        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

        assert.equal(fromStellies, 3)
    });
});