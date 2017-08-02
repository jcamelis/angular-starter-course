var dictionary = {
    "yolo": "what",
    "gg": "good",
    "swag": "swag"
}

var keys = Object.keys(dictionary);

var upperKeys = keys.map(function (key) {
    return key.toUpperCase();
});

console.log(upperKeys);

