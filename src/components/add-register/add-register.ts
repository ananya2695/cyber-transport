import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Slides } from "ionic-angular";

/**
 * Generated class for the AddRegisterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-register',
  templateUrl: 'add-register.html'
})
export class AddRegisterComponent {
  // @Input() items: any;
  @ViewChild(Slides) slides: Slides;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();

  text: string;

  constructor() {
    console.log('Hello AddRegisterComponent Component');
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

  goto2(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  goto3(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

}
