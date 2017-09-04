import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculatePage } from './calculate';

@NgModule({
  declarations: [
    CalculatePage,
  ],
  imports: [
    IonicPageModule.forChild(CalculatePage),
  ],
  exports: [
    CalculatePage
  ]
})
export class CalculatePageModule {}
