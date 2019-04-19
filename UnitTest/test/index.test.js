let assert = require('chai').assert;
let expect = require('chai').expect;
let should = require('chai').should();

let app = require('../index')

describe('Sample test', function(){
    it('should return a string', function(){
        let result = app.sayHello()
        assert.isString(result)
    });
    it('should not be a number', function(){
        let result = app.sayHello()
        assert.equal(result, 'Hello')
    });
})

describe('Calculator', function () {
    describe('Addition', function(){
        it('should return 4 for 2+2', function (done) {
            var result = app.add(2, 2)
            assert.equal((result), 4)
            done();
        })
    });
    
    describe("Multiplication", function () {
        it('should return 9 for 3*3', function (done) {
            var result = app.mul(3, 3);
            assert.equal(result, 9);
            done()
        })
    })
    
})