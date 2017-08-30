import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SenderActionPage } from './sender-action';

@NgModule({
  declarations: [
    SenderActionPage,
  ],
  imports: [
    IonicPageModule.forChild(SenderActionPage),
  ],
  exports: [
    SenderActionPage
  ]
})
export class SenderActionPageModule {}
