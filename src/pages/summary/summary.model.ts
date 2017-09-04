export class SummaryModel{
    provider:Array<Provider>;
    subtotal: number;
    surcharge: number;
    total: number
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