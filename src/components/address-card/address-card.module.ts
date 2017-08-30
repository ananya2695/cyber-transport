import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddressCardComponent } from './address-card';

@NgModule({
  declarations: [
    AddressCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AddressCardComponent
  ]
})
export class AddressCardComponentModule {}
