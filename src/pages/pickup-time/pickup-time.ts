import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickuptimeModel } from "./pickup-time.model";
import { PickupTimeServiceProvider } from "./pickup-time.service";
import { NumberParcelPage } from "../../pages/number-parcel/number-parcel";
/**
 * Generated class for the PickupTimePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pickup-time',
  templateUrl: 'pickup-time.html',
})
export class PickupTimePage {
  pickuptime: PickuptimeModel = new PickuptimeModel

  constructor(public navCtrl: NavController, public navParams: NavParams, public pickupTimeServiceProvider: PickupTimeServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupTimePage');
    this.getPickuptimeData();
  }
  getPickuptimeData() {
    this.pickupTimeServiceProvider.getPickuptime().then((data) => {
      this.pickuptime = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

  itemSelected() {
    this.navCtrl.push(NumberParcelPage);
  }
}
