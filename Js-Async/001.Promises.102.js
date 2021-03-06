const fetch = require('node-fetch');

function done() {
    console.log('I have all the titles', '\n');
}
getRandomSpaceTitle(function (data) {
    console.log('Space Tilte: ', data, '\n')
})
getRandomCatTitle(function (data) {
    console.log('Cat Tilte: ', data, '\n')
})
getRandomKittenTitle(function (data) {
    console.log('Kitten Tilte: ', data, '\n')
})
done();

// callback style
function getRandomSpaceTitle(callback) {
    getTitle('space')
        .then(json => {
            callback(json)
        });
}
function getRandomCatTitle(callback) {
    getTitle('cat')
        .then(json => {
            callback(json)
        });
}
function getRandomKittenTitle(callback) {
    getTitle('kitten')
        .then(json => {
            callback(json)
        });
}

// Promises
function getRandomSpaceTitlePromise() {
    return getTitle('space')
}
function getRandomCatTitlePromise() {
    return getTitle('cat')
}
function getRandomKittenTitlePromise() {
    return getTitle('kitten');
}

// fetch example with promises
function getTitle(title) {
    return fetch('https://www.reddit.com/r/' + title + '.json')
        .then(res => res.json())
        .then(json => json.data.children)
        .then(posts => posts.map(post => post.data.title))
        .then(json => {
            var len = json.length;
            var randomIndex = Math.floor(Math.random() * len);
            return json[randomIndex];
            //var toStringJson = JSON.stringify(json, null, 2);
            //console.log('Reddit posts', toStringJson);
        });
}
