import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryaddressModel } from "./delivery-address.model";
import { DeliveryaddressServiceProvider } from "./delivery-address.service";

/**
 * Generated class for the DeliveryAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-delivery-address',
  templateUrl: 'delivery-address.html',
})
export class DeliveryAddressPage {
  deliveryaddress: DeliveryaddressModel = new DeliveryaddressModel

  constructor(public navCtrl: NavController, public navParams: NavParams,public deliveryaddressServiceProvider:DeliveryaddressServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryAddressPage');
    this.getDeliveryaddressData();
  }
  getDeliveryaddressData() {
    this.deliveryaddressServiceProvider.getDeliveryaddress().then((data) => {
      this.deliveryaddress = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  } 
  
}
