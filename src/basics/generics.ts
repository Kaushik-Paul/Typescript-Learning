class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {
        
    }
}

let pair = new KeyValuePair<string, string>("Key", "Value");


function wrapInArray<T>(value: T) { 
    return [value]
}

let numbers = wrapInArray(1);