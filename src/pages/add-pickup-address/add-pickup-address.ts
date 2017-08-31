import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddpickupaddressModel } from "./add-pickup-address.model";
import { AddpickupaddressServiceProvider } from "./add-pickup-address.service";

/**
 * Generated class for the AddPickupAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-pickup-address',
  templateUrl: 'add-pickup-address.html',
})
export class AddPickupAddressPage {
  addpickupaddress: AddpickupaddressModel = new AddpickupaddressModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public addpickupaddressServiceProvider: AddpickupaddressServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPickupAddressPage');
    this.getAddpickupaddressData();
  }


  getAddpickupaddressData() {
    this.addpickupaddressServiceProvider.getAddpickupaddress().then((data) => {
      this.addpickupaddress = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

}
