const chai = require('chai'); 
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js');

describe("#shouldBuyCar()", function() {

  it("should return true if the car is pink", function() { //1
    const car = { 
      color: "pink" // colour pink
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when there are no details about the car", function() { //2
    const car = {};
       // no details about the car so left empty object

    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback", function() { //3
  const car = {
    type: "hatchback" //hatchback
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
});

  it("should return false when the car is a hatchback and pink", function() { //4
    const car = {
      type: "hatchback", //hatchback and pink combo
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() { //5th
  const car = {
    litresPer100km: 6, //is this coorect?
    price: 4000 //is this coorect?
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isTrue(shouldBuy);
});

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() { //6 
  const car = {
    litresPer100km: 11, //is this coorect?
    price: 5000 //is this coorect?
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isTrue(shouldBuy);
});



  it("should return false when the car has 6 litres/100km and is over $5,000", function () { //7
    const car = {
      litresPer100km: 6, 
      price: 6000 
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });


  it("should return false when the car has 11 litres/100km and is over $5,000", function () { //8
    const car = {
      litresPer100km: 11, //11 litres/100km
      price: 5999 //price exceeding threshold
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function () { //9
    const car = {
      litresPer100km: 5,
      price: 4000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function () { //10
    const car = {
      litresPer100km: 12,
      price: 4800
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  }); 

  it("should return undefined when there is no car", function () { //11
    const car = undefined;
  
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });

});