import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingModel } from "./booking.model";
import { BookingServiceProvider } from "./booking.service";
import { ConfirmPage } from "../confirm/confirm";
import { AddPickupAddressPage } from "../add-pickup-address/add-pickup-address";
import { PickupDatePage } from "../pickup-date/pickup-date";


/**
 * Generated class for the BookingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  booking:BookingModel = new BookingModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookingServiceProvider:BookingServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    this.getBookingData();
  }
  getBookingData() {
    this.bookingServiceProvider.getBooking().then((data) => {
      this.booking = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
  gotoDate(){
    this.navCtrl.push(PickupDatePage);
  }
  gotoPickup(){
    this.navCtrl.push(AddPickupAddressPage);
  }
}
