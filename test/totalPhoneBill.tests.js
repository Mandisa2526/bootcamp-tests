describe("Test my totalPhoneBill function" , function(){
    it("it should calculate ,total bill for 2 calls and 3 sms" , function(){
        
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("it should calculate ,total bill for  1 calls and 1 sms" , function(){
        
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("it should calculate ,total bill for  2 sms" , function(){
        
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});