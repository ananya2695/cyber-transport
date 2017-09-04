import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickupDatePage } from './pickup-date';

@NgModule({
  declarations: [
    PickupDatePage,
  ],
  imports: [
    IonicPageModule.forChild(PickupDatePage),
  ],
  exports: [
    PickupDatePage
  ]
})
export class PickupDatePageModule {}
