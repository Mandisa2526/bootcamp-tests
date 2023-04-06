describe("Test my findItemsOver function" , function(){
    it("it should return , products that have quantity higher than the threshold" , function(){
        let items = [1, 3, 5, 20, 21, 23];
        let expected = [21, 23];
        assert.deepEqual(expected, findItemsOver(items, 20));
    });
});