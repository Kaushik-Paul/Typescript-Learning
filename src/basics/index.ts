console.log("Hello world!");

let age: number = 20;

if (age < 50) {
    age += 10;
}
console.log(age);

let customList: number[] = [];
customList.push(45);


let user: [number, string] = [1, "Mosh"];
user.push(2);


let user2: [number, string][] = []
user2.push([23, "Tony"]);
user2.push([23, "Tony"]);
user2.push([23, "Tony"]);
user2.push([23, "Tony"]);


// Creating enums
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log("My Size is: " + mySize);


function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) { 
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(50000, 2023);


// Objects

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {id: 56, 
    name: 'Tony Stark',
    retire: (date: Date) => {
        console.log(date)
    }
}
employee.name = "Jack Sparrow";
console.log("EMPLOYEE: " + employee.name)

function kgToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 0.5;
    } else { 
        return parseInt(weight)
    } 
}

console.log("WEIGHT ======>>>>> " + kgToLbs("10 kg"))



// intersectin type
type Draggable = { 
    drag: () => void
};
type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let testBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

// Literal types
type Quantity = 50 | 100;
let quantity: Quantity = 50;


// Optional property access operator
type Customer = {
    birthday: Date
}
function getCustomer(id: number): Customer | null | undefined { 
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(2);
console.log(customer?.birthday)






