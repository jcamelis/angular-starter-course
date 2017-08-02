var obj = {
    handler: function (){},
    // [ 'prop_' + 42]: 'life'
}

obj[ 'prop_' + 42] = 'life'


console.log(obj.prop_42); // life 