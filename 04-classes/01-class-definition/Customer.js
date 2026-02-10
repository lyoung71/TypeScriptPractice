var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Customer;
}());
var myCustomer = new Customer("Landon", "Young");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
console.log(myCustomer.getFullName());
