
interface Vehicle {
    make: string;
    year: number;
    type: string;

    go(): void;
}

// class Car {
//     make: string;
//     year: number;
//     constructor(make: string, year: number) {
//         this.make = make;
//         this.year = year;
//     }
// }

// class OtherCar {

//     constructor(public make: string, public year: number) {

//     }
// }

class Car implements Vehicle {
    type: string;
    constructor(public make: string, public year: number) {

    }

    go(): void {
        
    }
}