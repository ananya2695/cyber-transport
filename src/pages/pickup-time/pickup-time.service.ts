import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { PickuptimeModel } from "./pickup-time.model";

/*
  Generated class for the PickupTimeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PickupTimeServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PickupTimeServiceProvider Provider');
  }
  getPickuptime(): Promise<PickuptimeModel> {
    return this.http.get('./assets/json/pickuptime.json')
      .toPromise()
      .then(response => response.json() as PickuptimeModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
