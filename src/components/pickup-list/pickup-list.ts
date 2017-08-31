import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Slides,NavController } from "ionic-angular";
import { BookingPage } from "../../pages/booking/booking";

/**
 * Generated class for the PickupListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pickup-list',
  templateUrl: 'pickup-list.html'
})
export class PickupListComponent {
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
  gotoBooking(){
    this.navCtrl.push(BookingPage);
  }

} 
