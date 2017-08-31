export class RegisterModel {
    email: string;
    password: string;
    confirmpassword: string;
    firstname: string;
    lastname: string;
    mobile: string;
    shopname: string;
    bank: Bank = new Bank();
}
export class Bank {
    accountname: string;
    accountnumber: number;
    confirmaccnumber: number;
}

