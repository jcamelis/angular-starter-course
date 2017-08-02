var obj = {
    "one": 1,
    "two": 2,
    "three": 3
}


// for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(obj[key]);
//     }
// }

var keys = Object.keys(obj);

var timesTwo = keys.map(function (key) {
    return obj[key] * 2;
});

console.log(timesTwo);