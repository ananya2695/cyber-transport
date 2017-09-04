import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NumberparcelModel } from "./number-parcel.model";
import { NumberParcelServiceProvider } from "./number-parcel.service";
/**
 * Generated class for the NumberParcelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-number-parcel',
  templateUrl: 'number-parcel.html',
})
export class NumberParcelPage {
  numberparcel: NumberparcelModel = new NumberparcelModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public numberParcelServiceProvider: NumberParcelServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumberParcelPage');
    this.getNumberparcelData();
  }
  getNumberparcelData() {
    this.numberParcelServiceProvider.getNumberparcel().then((data) => {
      this.numberparcel = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

}
