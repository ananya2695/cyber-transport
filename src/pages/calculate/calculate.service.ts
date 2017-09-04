import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CalculateModel } from "./calculate.model";

/*
  Generated class for the CalculateServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CalculateServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CalculateServiceProvider Provider');
  }
  getCalculate(): Promise<CalculateModel> {
    return this.http.get('./assets/json/calculate.json')
      .toPromise()
      .then(response => response.json() as CalculateModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
