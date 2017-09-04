import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SummaryServiceProvider } from "./summary.service";
import { SummaryModel } from "./summary.model";
/**
 * Generated class for the SummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  summary: SummaryModel = new SummaryModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public summaryServiceProvider:SummaryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
    this.getSummaryData();
  }
  getSummaryData() {
    this.summaryServiceProvider.getSummary().then((data) => {
      this.summary = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
}
