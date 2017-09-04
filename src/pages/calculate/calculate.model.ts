export class CalculateModel {
   provider:Array<Provider>;
    
}
export class Provider{
    name : string;
    rates: Array<Rates>;
}
export class Rates{
    name : string;
    description : string;
    value : string;
}