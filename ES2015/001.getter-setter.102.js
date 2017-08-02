var obj = {
    firstName: 'Mike',
    lastName: 'Adams',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        var fullNameArray = value.split(' ');
        this.firstName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
}

console.log(obj.fullName);// 'Mike Adams'

obj.fullName = 'Scott Moss';

console.log(obj.firstName); // 'Scott'
console.log(obj.lastName); // 'Moss'
