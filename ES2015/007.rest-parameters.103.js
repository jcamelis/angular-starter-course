

function mergeObjects(target, ...objs) {
    objs.map(obj => {
        Object.keys(obj).map(key => {
            target[key] = obj[key];
        })
    });
    return target;
}
var b = {b: 'B'};
var c = {c: 'C'};
var a = {a: 'A'};

console.log(mergeObjects(a, b, c));
// console.log(mergeObjects({}, a, b, c));

console.log(a);
console.log(b);
console.log(c);