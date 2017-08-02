
var _ = require('underscore');

var Test = require('./my.module');

var instructions = ['Foo', 'Bar'];

_.each(instructions, function (person) {
    console.log('Hello lol: ', person);

    Test();
})