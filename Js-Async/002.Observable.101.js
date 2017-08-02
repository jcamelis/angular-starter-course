
const Rx = require('rxjs');


var arr = Rx.Observable.from([1, 2, 3, 4, 5]);

// var arr = Rx.Observable.interval(500);


// arr.subscribe(num => {
//     console.log( `My number is ${ num }`);
// });


arr
.map(num => {
    return `My number is ${ num }`
}).subscribe(num => {
    console.log(num);
});
