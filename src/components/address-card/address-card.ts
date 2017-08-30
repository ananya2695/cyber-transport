import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AddressCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'address-card',
  templateUrl: 'address-card.html'
})
export class AddressCardComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();

  text: string;

  constructor() {
    console.log('Hello AddressCardComponent Component');
  }

}
