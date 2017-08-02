

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved');
    }, 2000);
});


promise.then(function (data) {
    console.log(data);
});

console.log('END');