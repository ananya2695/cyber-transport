import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() items: any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();





  constructor() {
    console.log('Hello PickupListComponent Component');

  }

} 
