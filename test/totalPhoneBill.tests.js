describe("Test my totalPhoneBill function" , function(){
    it("it should calculate ,total bill for the data provided" , function(){
        var sms = 7.45
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
});