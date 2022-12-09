class Person {
    constructor(public firstName: string, public lastName: string) { 
    }

    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }

    walk() { 
        console.log("Walking !!!");        
    }
}


class Student extends Person {
    constructor(public student_id: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeNote() {
        console.log("Taking Notes !!!");
    }
}

class Teacher extends Person {
    override get fullName(): string {
        return "Professor " + super.fullName;
    }
}

let student = new Student(1, "John", "Smith");
console.log("Student: " + student.fullName);

let teacher = new Teacher("John", "Smith");
console.log("Student: " + teacher.fullName);


// Polymorphism
function printNames(people: Person[]): void {
    for(let person of people) {
        console.log("Polymorphism: " + person.fullName);
    }
}

printNames([new Teacher("John", "Smith"), new Student(1, "Johnny", "Depth")]);


// Abstract class
abstract class Shape {
    constructor(public color: string) {
    }
    abstract render(): void;
}

class Rectangle extends Shape {
    constructor(color: string) { 
        super(color);
    }

    override render(): void {
        console.log("Rendering Rectangle");
    }
}


// Interface
interface Calendar {
    name: string;
    addEvent(): void;
    deleteEvent(): void;
}

class GoogleCalendar implements Calendar {
    constructor(public name: string) {
    }
    
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    deleteEvent(): void {
        throw new Error("Method not implemented.");
    }
}