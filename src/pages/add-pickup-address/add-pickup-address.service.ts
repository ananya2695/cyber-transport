import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AddpickupaddressModel } from "./add-pickup-address.model";

/*
  Generated class for the AddpickupaddressServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddpickupaddressServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AddpickupaddressServiceProvider Provider');
  }
  getAddpickupaddress(): Promise<AddpickupaddressModel> {
    return this.http.get('./assets/json/addpickupaddress.json')
      .toPromise()
      .then(response => response.json() as AddpickupaddressModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
