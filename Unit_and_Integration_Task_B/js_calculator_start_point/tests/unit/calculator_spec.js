var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('should be able to add 2 numbers together', function(){
    calculator.previousTotal = 4
    calculator.add(1);
    assert.equal(5, calculator.runningTotal)
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('should be able to multiply ', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

});
