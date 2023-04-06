describe("Test my fromWhere function" , function(){
    it("it should return Bellvile , when the car is from that town" , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville' );
    });
    it("it should return Paarl , when the car is from that town" , function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl' );
    });
    it("it should return Cape Town , when the car is from that town" , function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it("it should return Some Other place , when the car is not from these registrations 'CY,CJ AND CA'" , function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});