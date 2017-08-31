import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPickupAddressPage } from './add-pickup-address';

@NgModule({
  declarations: [
    AddPickupAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPickupAddressPage),
  ],
  exports: [
    AddPickupAddressPage
  ]
})
export class AddPickupAddressPageModule {}
