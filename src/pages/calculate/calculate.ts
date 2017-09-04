import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculateServiceProvider } from "./calculate.service";
import { CalculateModel } from "./calculate.model";

/**
 * Generated class for the CalculatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {
  calculate: CalculateModel = new CalculateModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculateServiceProvider:CalculateServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
    this.getCalculateData();
  }
  getCalculateData() {
    this.calculateServiceProvider.getCalculate().then((data) => {
      this.calculate = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

}
