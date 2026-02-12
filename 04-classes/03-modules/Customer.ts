export class Customer {


    constructor(private _firstName: string,
                private _lastName: string,) {

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

