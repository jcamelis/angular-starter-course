let nums = [1, 2, 3];

function addEverything(x, y, z) {
    return x + y + z;
}

let val = addEverything(...nums);
// let val = addEverything.apply(undefined, nums);

console.log(val)