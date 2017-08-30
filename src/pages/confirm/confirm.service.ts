import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ConfirmModel } from "./confirm.model";
/*
  Generated class for the ConfirmServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConfirmServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ConfirmServiceProvider Provider');
  }

  getConfirm(): Promise<ConfirmModel> {
    return this.http.get('./assets/json/confirm.json')
      .toPromise()
      .then(response => response.json() as ConfirmModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
