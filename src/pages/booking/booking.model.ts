export class BookingModel{
    nameplace:string;
    addressplace:Address = new Address();
    telplace:string;
    }
    export class Address{
        address:string;
        subdistrict:string;
        district:string;
        province:string;
        postcode:string;
    }