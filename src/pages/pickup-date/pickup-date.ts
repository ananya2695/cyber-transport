import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickupdateModel } from "./pickup-date.model";
import { PickupDateServiceProvider } from "./pickup-date.service";
import { PickupTimePage } from "../../pages/pickup-time/pickup-time";
/**
 * Generated class for the PickupDatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pickup-date',
  templateUrl: 'pickup-date.html',
})
export class PickupDatePage {
  pickupdate: PickupdateModel = new PickupdateModel

  constructor(public navCtrl: NavController, public navParams: NavParams, public pickupDateServiceProvider: PickupDateServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupDatePage');
    this.getPickupdateData();
  }

  getPickupdateData() {
    this.pickupDateServiceProvider.getPickupdate().then((data) => {
      this.pickupdate = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
  itemSelected() {
    this.navCtrl.push(PickupTimePage);
  }
}
