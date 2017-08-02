class App {
    constructor() {
        console.log('hello');
    }

    method () {
        console.log('method called');
    }
}

/** OLD SCHOOL */
// function App() {
//     console.log('hello');
// }
// App.prototype.method = function () {
//     console.log('method called');
// }


var app = new App();

app.method();
