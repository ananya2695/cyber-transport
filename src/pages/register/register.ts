import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterServiceProvider } from "./register.service";
import { RegisterModel } from "./register.model";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  register: RegisterModel = new RegisterModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public registerServiceProvider:RegisterServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.getRegisterData();
  }
  getRegisterData() {
    this.registerServiceProvider.getRegister().then((data) => {
      this.register = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
}
