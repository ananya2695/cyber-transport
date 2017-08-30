import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the HomeListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'home-list',
  templateUrl: 'home-list.html'
})
export class HomeListComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();

  text: string;

  constructor() {
    console.log('Hello HomeListComponent Component');
    this.text = 'Hello World';
  }

}
