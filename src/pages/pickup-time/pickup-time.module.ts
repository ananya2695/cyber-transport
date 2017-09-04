import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupTimePage } from './pickup-time';

@NgModule({
  declarations: [
    PickupTimePage,
  ],
  imports: [
    IonicPageModule.forChild(PickupTimePage),
  ],
  exports: [
    PickupTimePage
  ]
})
export class PickupTimePageModule {}
