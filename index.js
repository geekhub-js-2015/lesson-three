/**
 * Here we look at how we can use functions
 */
debugger;
(function() {

var obj = {
    my: 'object',
    aNumber: 1,
    'a key with spaces': [1, 2, 3],
    action: function() {
        return 10;
    }
};

console.log('Object');
console.log(obj.my);
console.log(obj['a key with spaces']);

//for in

//prototype
//inherit

//Object.create
function createObject( fn ){
    function f(){}
    f.prototype = fn.prototype;
    return new f;
}

//instanceof

//hasownproperty

//mixins

//this

//arrays

//forEach, map, reduce
//lodash

})();