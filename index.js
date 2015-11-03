/**
 * Here we look at Objects
 */
(function() {

    var obj = {
        my: 'object',
        aNumber: 1,
        'a key with spaces': [1, 2, 3],
        action: function () {
            return {
                first : 1,
                second: 2
            };
        },
        another: {
            key: "values"
        }
    };
    console.warn('Object');
    console.log(obj.my);
    console.log(obj['a key with spaces']);
    console.log(obj.another.key);

// for in - FORGET this
    console.warn('For in');
    for (var key in obj) {
        console.log(key, obj[key]);
    }

// Much nicer
    Object.keys(obj).forEach(function(key) {
        console.log(key, obj[key]);
    });

//arrays

//forEach, map, reduce

    var a = [1, 2, 3, 4, 5];

    a.forEach(function (val, idx) {
        console.log(idx + '=> ' + val);
    });

    var mappedA = [{name: 'fred'}, {name: 'anega'}].filter(function (el) {
        return el.name == 'fred';
    });

    console.log(mappedA);

    var reducedA = [{name: 'fred'}, {name: 'anega'}].reduce(function (memo, val, idx) {
        memo['name'] += val.name;
        return memo;
    }, {});

    console.log(reducedA);

    if ([{name: 'fred'}, {name: 'anega'}, {name: 'andrey'}].some(function (obj) {
            return obj.name == 'fred';
        })) {

    }

    var mappedAndReduced = a.map(function (val) {
        return val * 2;
    }).reduce(function (memo, val) {
        return memo + val;
    }, 0);

    console.log(mappedAndReduced);

    // More examples

    var a = [{name: "fred", active: true},
        {name: "sasha", active: false},
        {name: "masha", active: true}];

    a.sort(function(a, b) {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
        return 0;
    });

    var b = a
        .filter(function(user) {
            return user.active;
        })
        .map(function (user) {
            return user.name;
        })
        .reduce(function(prev, name) {
            return (prev ? prev + ', ' : '') + name;
        });

    // Using some functions
    [1, 2, 3, 4].filter(isEven).map(double).forEach(show);
    var total = [1, 2, 3, 4].filter(isEven).map(double).reduce(sum);

    function isEven(i) {
        return i % 2 == 0
    }

    function double(i) {
        return i * 2
    }

    function show(i) {
        console.log(i)
    }

    function sum(previous, i) {
        return (previous || 0) + i;
    }

    // OR

    a = function() {return false};
    b = function() {return 10};
    c = function() {return true };

    d = a() || b() || c();

    d = [a, b, c].some(function (i) {
        return i();
    });

    // AND

    e = a() && b() && c();

    e = [a, b, c].every(function (i) {
        return i();
    });
});
