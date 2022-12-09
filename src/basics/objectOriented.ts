class Account { 
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    // constructor(id: number, owner: string, balance: number) { 
    //     this.id = id;
    //     this.owner = owner;
    //     this._balance = balance; 
    // }

    // parameter properties
    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number) {       
    }

    deposit(amount: number): void {
        if (amount <= 0) { 
            throw new Error("Invalid Amount")
        }
        this._balance += amount;
    }

    getBalance(): number {
        return this._balance;
    }

    // getters
    get balance(): number {
        return this._balance
    }

    // setters 
    set balance(value: number) {
        if (value <= 0) { 
            throw new Error("Invalid Amount")
        }
        this.balance = value;
    }
}


let account = new Account(1, "Mosh", 200)
account.deposit(100);
console.log(account);

console.log("Balance is: " + account.balance);

