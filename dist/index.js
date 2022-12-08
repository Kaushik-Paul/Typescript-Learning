"use strict";
console.log("Hello world!");
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
let customList = [];
customList.push(45);
let user = [1, "Mosh"];
user.push(2);
let user2 = [];
user2.push([23, "Tony"]);
user2.push([23, "Tony"]);
user2.push([23, "Tony"]);
user2.push([23, "Tony"]);
// Creating enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log("My Size is: " + mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(50000, 2023);
// Objects
let employee = { id: 56,
    name: 'Tony Stark',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "Jack Sparrow";
console.log("EMPLOYEE: " + employee.name);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 0.5;
    }
    else {
        return parseInt(weight);
    }
}
console.log("WEIGHT ======>>>>> " + kgToLbs("10 kg"));
let testBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(2);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map