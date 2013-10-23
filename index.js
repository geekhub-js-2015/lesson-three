/**
 * Here we look at Objects, inheritance, and all that jazz
 */
(function() {

var obj = {
    my: 'object',
    aNumber: 1,
    'a key with spaces': [1, 2, 3],
    action: function() {
        return 10;
    }
};

console.warn('Object');
console.log(obj.my);
console.log(obj['a key with spaces']);

//for in
console.warn('For in');
for(var key in obj) {
    console.log(key, obj[key]);
}

//constructor
function Animal(name, a) {
    //Private properties
    var age = a;

    //Public properties
    this.name = name;
    this.type = 'animal';

    //Public function, with access to private variables
    this.sayHello = function() {
        console.log('Hi, my name is ' + this.name + ', ' + sayAge());
    }

    //Private function
    function sayAge() {
        return 'I am ' + age + ' years old';
    }
}

var fred = new Animal('fred', 25);

console.warn('Constructor');
fred.sayHello();

fred.name = 'Alex';

fred.sayHello();

console.warn('instanceof');
console.log(fred instanceof Animal);

//prototype
//Public function, only access to public properties
Animal.prototype.walk = function() {
    console.log(this.name + ' has gone for a walk');
};

console.warn('Prototype');
fred.walk();

Animal.prototype = {
    walk: function() {
        console.log('NO');
    }
};

console.warn('Walk again');
fred.walk();

console.warn('check instanceof');
console.log(fred instanceof Animal);

//inheritance
function Cat(name, age) {
    Animal.apply(this, arguments);
    //Animal.apply(this, [name, age]);
    //Animal.call(this, name, age);

    //Overriding property
    this.type = 'cat';
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var spot = new Cat('Spot', 5);
spot.walk();

Animal.prototype.run = function() {
    console.log(this.name + ' is running very fast!');
}

spot.run();

//Old school
//Object.create
function createObject( prototype ){
    function f(){}
    f.prototype = prototype;
    return new f;
}

//hasownproperty
console.warn('For in spot');
for(var key in spot) {
    console.log(key, obj[key]);
}

console.warn('For in spot only');
for(var key in spot) {
    if(spot.hasOwnProperty(key)) {
        console.log(key, obj[key]);
    }
}

//mixins
function shout() {
    console.log('I AM A ' + this.type);
}

console.warn('Shout');
shout();

Animal.prototype.shout = shout;

console.warn('fred shout');
spot.shout();

//this

Animal.prototype.walkLater = function() {
    return function() {
        this.walk();
    };
};

var later = spot.walkLater();
console.warn('later');
//later();

console.warn('tack it on');
spot.later = later;
spot.later();

console.warn('apply later');
later.apply(spot);

Animal.prototype.walkLaterFixed = function() {
    var that = this;
    return function() {
        that.walk();
    };
};

console.warn('fixed later');
later = spot.walkLaterFixed();
later();

//arrays

//forEach, map, reduce

var a = [1, 2, 3, 4, 5];

a.forEach(function(val, idx) {
    console.log(idx + '=> ' + val);
});

var mappedA = a.map(function(val) {
    return val * 2;
});

console.log(mappedA);

var reducedA = a.reduce(function(memo, val) {
    return memo + val;
}, 0);

console.log(reducedA);

var mappedAndReduced = a.map(function(val) {
    return val * 2;
}).reduce(function(memo, val) {
    return memo + val;
}, 0);

console.log(mappedAndReduced);

})();