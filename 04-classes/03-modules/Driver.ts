import { Customer } from "./Customer";

let myCustomer = new Customer("Landon", "Young");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.fullName);


myCustomer.firstName = "BoJack";
myCustomer.lastName = "Horseman";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.fullName);
