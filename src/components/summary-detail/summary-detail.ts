import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SummaryDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'summary-detail',
  templateUrl: 'summary-detail.html'
})
export class SummaryDetailComponent {
  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() {
    console.log('Hello SummaryDetailComponent Component');
  }

}
