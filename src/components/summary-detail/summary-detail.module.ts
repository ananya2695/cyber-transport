import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SummaryDetailComponent } from './summary-detail';

@NgModule({
  declarations: [
    SummaryDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SummaryDetailComponent
  ]
})
export class SummaryDetailComponentModule {}
