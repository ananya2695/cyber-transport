export class ConfirmModel{
nameplace:string;
addressplace:Address = new Address();
telplace:string;
timeplace:string;
dateplace:string;
pieceplace:number;
}
export class Address{
    address:string;
    subdistrict:string;
    district:string;
    province:string;
    postcode:string;  
}
