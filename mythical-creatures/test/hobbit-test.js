var assert = require('chai').assert;
var Hobbit = require('../exercises/hobbit');

describe('Hobbit', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Hobbit);
  });

  it.skip('should have a name', function() {
    var bilbo = new Hobbit({ name: 'Bilbo' });
    var mark = new Hobbit({ name: 'Mark' });

    assert.equal(bilbo.name, 'Bilbo');
    assert.equal(mark.name, 'Mark');
  });

  it.skip('should start out 0 years old', function() {
    var bilbo = new Hobbit({ name: 'Bilbo' });

    assert.equal(bilbo.age, 0);
  });

  it.skip('should gain 1 year after every birthday', function() {
    var hobbit = new Hobbit({ name: 'Meriadoc' });

    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();

    assert.equal(hobbit.age, 3);
  });

  function timeTravel(num, hobbit) {
    for (var i = 0; i < num; i++) {
      hobbit.celebrateBirthday();
    };
  };

  it.skip('should be considered a child at the age of 32', function() {
    var hobbit = new Hobbit({ name: 'Taylor' });

    // Notice that timeTravel is a function in this file (lines 34 - 38). You do not need to put a timeTravel method in your Hobbit class. Look at the timeTravel function above...
      // - What method is being invoked within timeTravel?
      // - How many times is it being invoked?
      // - What method do you need to update in your Hobbit class?

    timeTravel(32, hobbit);

    assert.equal(hobbit.age, 32);
    assert.equal(hobbit.adult, false);
  });

  it.skip('should be considered an adult at 33', function() {
    var hobbit = new Hobbit({ name: 'Taylor' });

    timeTravel(33, hobbit);

    assert.equal(hobbit.age, 33);
    assert.equal(hobbit.adult, true);
  });

  it.skip('should be considered old at the age of 101', function() {
    var hobbit = new Hobbit({ name: 'Samwise' });

    assert.equal(hobbit.old, false)

    timeTravel(100, hobbit);

    assert.equal(hobbit.old, false)

    hobbit.celebrateBirthday();

    assert.equal(hobbit.age, 101);
    assert.equal(hobbit.old, true)
  });

  it.skip('should be able to get the ring if its name is Frodo', function() {
    var hobbit1 = new Hobbit({ name: 'Frodo' });
    var hobbit2 = new Hobbit({ name: 'Samwise' });

    assert.equal(hobbit1.getRing(), 'Here is the ring!');
    assert.equal(hobbit1.hasRing, true);

    assert.equal(hobbit2.getRing(), 'You can\'t have it!');
    assert.equal(hobbit2.hasRing, false);
  });
});
