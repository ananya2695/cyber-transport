import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  homeRoot = 'HomePage'
  senderActionRoot = 'SenderActionPage'
  bookingRoot = 'BookingPage'
  sendTrackingNumberRoot = 'SendTrackingNumberPage'
  moreRoot = 'MorePage'


  constructor(public navCtrl: NavController) {}

}
