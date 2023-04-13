describe("Test my mostProfitableDepartment function" , function(){
    it("it should determine and return the most , profitable departments  and which day of the week is the most profitable" , function(){
        var salesData = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ];
        
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    })        

        
        it("it should determine and return the , most profitable day in sales dataset2" , function(){
            var salesData2 = [
                {department : 'electronics', sales : 4500, day : 'Monday'},
                {department : 'outdoor', sales : 1500, day : 'Monday'},
                {department : 'carpentry', sales : 5500, day : 'Monday'},
                {department : 'steelwork', sales : 7500, day : 'Tuesday'},
                {department : 'outdoor', sales : 2505, day : 'Tuesday'},
                {department : 'carpentry', sales : 1540, day : 'Tuesday'},
                {department : 'hardware', sales : 1500, day : 'Wednesday'},
                {department : 'outdoor', sales : 8507, day : 'Wednesday'},
                {department : 'carpentry', sales : 8009, day : 'Wednesday'},
                {department : 'hardware', sales : 12000, day : 'Thursday'},
                {department : 'carpentry', sales : 6109, day : 'Thursday'},
                {department : 'hardware', sales : 7005, day : 'Friday'},
                {department : 'electronics', sales : 12006, day : 'Friday'},
                {department : 'electronics', sales : 16109, day : 'Saturday'},
                {department : 'steelwork', sales : 7500, day : 'Tuesday'},
                {department : 'outdoor', sales : 2505, day : 'Tuesday'},
                {department : 'carpentry', sales : 1540, day : 'Tuesday'},
                {department : 'steelwork', sales : 1500, day : 'Wednesday'},
                {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            ];
            
            assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
       
        
        });
        it("it should determine and return an empty string ,if the string passed is empty" , function(){
            var salesData2 = [
                {department : '', sales : 4500, day : ''},
                {department : '', sales : 1500, day : ''},
                {department : '', sales : 5500, day : ''},
                {department : '', sales : 7500, day : ''},
                {department : '', sales : 2505, day : ''},
                {department : '', sales : 1540, day : ''},
                {department : '', sales : 1500, day : ''},
                {department : '', sales : 8507, day : ''},
                {department : '', sales : 8009, day : ''},
                
            ];
            
            assert.equal('', mostProfitableDepartment(salesData2), "Most profitable department is '' for dataset 2");
       
        
        });
});