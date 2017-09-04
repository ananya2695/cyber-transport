import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { PickupdateModel } from "./pickup-date.model";


/*
  Generated class for the PickupDateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PickupDateServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PickupDateServiceProvider Provider');
  }
  getPickupdate(): Promise<PickupdateModel> {
    return this.http.get('./assets/json/pickupdate.json')
      .toPromise()
      .then(response => response.json() as PickupdateModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
