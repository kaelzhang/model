describe("model", function(){
    describe("model.my_method()", function(){
        it("should return 1", function(done){
            _use('model@latest', function(exports) {
                expect('my_method' in exports);
                done();
            });
        });
    });
});