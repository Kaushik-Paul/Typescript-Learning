import { Circle, Square } from './shapes'
import {calculateTax} from "./tax"

let circle = new Circle(34);
console.log(`Circle Radius is: ${circle.radius}`);

let square = new Square(56);
console.log(`The Square width is: ${square.width}`);

let tax = calculateTax(500);
console.log(`The Tax of the amount is ${tax}`);

