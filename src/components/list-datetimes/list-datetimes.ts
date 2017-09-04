import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListDatetimesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-datetimes',
  templateUrl: 'list-datetimes.html'
})
export class ListDatetimesComponent {
  @Input() items: any;


  constructor() {
    console.log('Hello ListDatetimesComponent Component');

  }

}
