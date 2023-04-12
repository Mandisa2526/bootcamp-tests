describe("Test my findItemsOver function" , function(){
    it("it should return , products name that have quantity higher than 20 in itemList2" , function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];  
        
        var results2 = [];
        
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });

    it("it should return a name of, products that have quantity higher than the 27 in the itemList" , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
        
        ];
        
        assert.deepEqual(results, findItemsOver(itemList, 27));
    });
    it("it should return a name of, products that have quantity below threshold in itemList3" , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 8},
            {name : 'bananas', qty : 4},
            {name : 'apples', qty : 3},
        ];
        
        var results = [];
        
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });

    it("it should return an empty string, if the empty string is passed in itemList3" , function(){
        var results3 = [];
        var itemList3 = [
            {name : '', qty : ''},
            {name : '', qty : ''}
        ];
        
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });


});