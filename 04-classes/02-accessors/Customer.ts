class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer("Landon", "Young");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.fullName);


myCustomer.firstName = "BoJack";
myCustomer.lastName = "Horseman";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.fullName);
