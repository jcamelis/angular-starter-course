printObject('argument :', 'Patick', 'Scott', 'Mike');

function printObject(prefix, ...args) {
    args.map(function (arg) {
        console.log(prefix, arg);
    });
}