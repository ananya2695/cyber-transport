import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NumberParcelModel } from "./number-parcel.model";

/*
  Generated class for the NumberParcelServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NumberParcelServiceProvider {

  constructor(public http: Http) {
    console.log('Hello NumberParcelServiceProvider Provider');
  }
  getNumberparcel(): Promise<NumberParcelModel> {
    return this.http.get('./assets/json/numberparcel.json')
      .toPromise()
      .then(response => response.json() as NumberParcelModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
