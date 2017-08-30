export class ConfirmModel{
nameplace:string;
address:Address = new Address();
telplace:string;
timeplace:string;
pieceplace:number;
}
export class Address{
    address:string;
    subdistrict:string;
    district:string;
    province:string;
    postcode:string;  
}
