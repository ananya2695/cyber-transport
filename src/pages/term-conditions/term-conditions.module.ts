import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermConditionsPage } from './term-conditions';

@NgModule({
  declarations: [
    TermConditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermConditionsPage),
  ],
  exports: [
    TermConditionsPage
  ]
})
export class TermConditionsPageModule {}
