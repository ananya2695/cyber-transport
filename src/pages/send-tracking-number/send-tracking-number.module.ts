import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendTrackingNumberPage } from './send-tracking-number';

@NgModule({
  declarations: [
    SendTrackingNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(SendTrackingNumberPage),
  ],
  exports: [
    SendTrackingNumberPage
  ]
})
export class SendTrackingNumberPageModule {}
