import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { SenderActionPage } from "../sender-action/sender-action";
import { BookingPage } from "../booking/booking";
import { SendTrackingNumberPage } from "../send-tracking-number/send-tracking-number";
import { MorePage } from "../more/more";

/**
 * Generated class for the TabtransPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabtrans',
  templateUrl: 'tabtrans.html'
})
@IonicPage()
export class TabtransPage {

  homeRoot = HomePage
  senderActionRoot = SenderActionPage
  bookingRoot = BookingPage
  sendTrackingNumberRoot = SendTrackingNumberPage
  moreRoot = MorePage


  constructor(public navCtrl: NavController) {}

}
