export class ConfirmModel{
name:string;
address:Address = new Address();
tel:string;
time:string;
date:string;
piece:number;
}
export class Address{
    address:string;
    subdistrict:string;
    district:string;
    province:string;
    postcode:string;  
}
