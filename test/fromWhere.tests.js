describe("Test my fromWhere function" , function(){
    it("it should return , the town the car is from" , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville' );
    });
    it("it should return , the town the car is from" , function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl' );
    });
    it("it should return , the town the car is from" , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it("it should return , the town the car is from" , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});