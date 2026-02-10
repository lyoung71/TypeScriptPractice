class Customer {

    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let myCustomer = new Customer("Landon", "Young");

console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
console.log(myCustomer.getFullName());
