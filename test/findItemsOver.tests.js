describe("Test my findItemsOver function" , function(){
    it("it should return , products that have quantity higher than the threshold" , function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];

        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it("it should return a name of, products that have quantity higher than the threshold" , function(){
        let items = [1, 3, 5, 20, 21, 23];
        let expected = [21, 23];
        assert.deepEqual(expected, findItemsOver(items, 20));
    });

});