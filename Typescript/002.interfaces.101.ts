

interface BakedGood {
    sugar: number;
    name: string;
    bake(mins: number): string;
    icing?: boolean
}


const cake: BakedGood = {
    sugar: 23,
    name: 'cherry cake',
    bake(min: number) {
        return `will be done in ${min}...`
    }
}