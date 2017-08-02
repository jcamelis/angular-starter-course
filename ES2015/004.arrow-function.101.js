// EXAMPLE 1
// let object = {
//     collection: ['patrick', 'scott', 'mike'],
//     domain: 'angularclass.com',
//     method: function () {
//         return this.collection.map(item => {
//             return `${ item }@${ this.domain }`
//         })
//     }
// }

// console.log(object.method());

let object = {
    collection: ['patrick', 'scott', 'mike'],
    domain: 'angularclass.com',
    method: function () {
        var mapEmail = function (item) {
            return item + '@' + this.domain;
        }
        // }.bind(this);
        mapEmail.bind(this); // DONT WORK

        return this.collection.map(mapEmail);
    }
}

console.log(object.method());
