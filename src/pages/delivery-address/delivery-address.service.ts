import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DeliveryaddressModel } from "./delivery-address.model";

/*
  Generated class for the DeliveryaddressServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeliveryaddressServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DeliveryaddressServiceProvider Provider');
  }
  getDeliveryaddress(): Promise<DeliveryaddressModel> {
    return this.http.get('./assets/json/deliveryaddress.json')
      .toPromise()
      .then(response => response.json() as DeliveryaddressModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
