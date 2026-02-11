var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Landon", "Young");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.fullName);
myCustomer.firstName = "BoJack";
myCustomer.lastName = "Horseman";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.fullName);
