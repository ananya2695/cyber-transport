import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Slides, NavController } from "ionic-angular";
import { ConfirmPage } from "../../pages/confirm/confirm";

/**
 * Generated class for the DeliveryListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'delivery-list',
  templateUrl: 'delivery-list.html'
})
export class DeliveryListComponent {
  @ViewChild(Slides) slides: Slides;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();
  constructor(public navCtrl:NavController) {
    console.log('Hello PickupListComponent Component');

  }
  ngAfterViewInit() {
    // child is set
    this.slides.lockSwipes(true);
  }

  BacksignupProfile() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  gotoBack() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  gotoNext(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  gotoSave(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  gotoConfirm(){
    this.navCtrl.push(ConfirmPage);
  }
}
