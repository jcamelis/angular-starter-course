var obj = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set b(x) {
        this.a = x/2;
    }
};

console.log(obj.a);
console.log(obj.b);

obj.b = 50;
console.log(obj.a);