import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmModel } from "./confirm.model";
import { ConfirmServiceProvider } from "../confirm/confirm.service";

/**
 * Generated class for the ConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  confirm: ConfirmModel = new ConfirmModel();
  constructor(public navCtrl: NavController, public navParams: NavParams,public confirmServiceProvider:ConfirmServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
    this.getConfirmData();
  }
  getConfirmData() {
    this.confirmServiceProvider.getConfirm().then((data) => {
      this.confirm = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
  


}
