import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the CalculationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'calculation',
  templateUrl: 'calculation.html'
})
export class CalculationComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();

  
  constructor() {
    console.log('Hello CalculationComponent Component');
  }

}
