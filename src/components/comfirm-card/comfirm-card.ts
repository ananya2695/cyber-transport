import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ComfirmCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'comfirm-card',
  templateUrl: 'comfirm-card.html'
})
export class ComfirmCardComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello ComfirmCardComponent Component');
  }

}
