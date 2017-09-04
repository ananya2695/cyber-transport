import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SummaryModel } from "./summary.model";

/*
  Generated class for the SummaryServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SummaryServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SummaryServiceProvider Provider');
  }
  getSummary(): Promise<SummaryModel> {
    return this.http.get('./assets/json/summary.json')
      .toPromise()
      .then(response => response.json() as SummaryModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
