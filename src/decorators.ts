function Component(constructor: Function) { 
    console.log("Component Decorator called");
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDOM = () => { 
        console.log("Inserting the component in the DOM");
        console.log("Hello there");
        
    }
}


@Component
class ProfileComponent {
}