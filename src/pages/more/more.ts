import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { ReportPage } from "../report/report";
import { HowtousePage } from "../howtouse/howtouse";
import { YourFeedbackPage } from "../your-feedback/your-feedback";
import { TermConditionsPage } from "../term-conditions/term-conditions";
import { SettingPage } from "../setting/setting";
import { LogoutPage } from "../logout/logout";
/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app :App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  ReportPage(){
    this.navCtrl.push(ReportPage);
  }
  HowtousePage(){
    this.navCtrl.push(HowtousePage);
  }
  YourFeedbackPage(){
    this.navCtrl.push(YourFeedbackPage);
  }
  TermConditionsPage(){
    this.navCtrl.push(TermConditionsPage);
  }
  SettingPage(){
    this.navCtrl.push(SettingPage);
  }
  LogoutPage(){
    window.localStorage.clear();
    this.navCtrl.push(LogoutPage);
  }

}
