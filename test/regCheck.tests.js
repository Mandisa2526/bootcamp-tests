describe("Test my regCheck function" , function(){
    it("it should return ,the end of a registration number that ends with GP, L, EC, MP when called with 'GP, L, EC, MP'  " , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
});