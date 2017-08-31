import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Slides } from "ionic-angular";

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
  constructor() {
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

  BacksignupShop() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  go2(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  go3(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

} 
