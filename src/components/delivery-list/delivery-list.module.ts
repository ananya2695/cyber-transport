import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DeliveryListComponent } from './delivery-list';

@NgModule({
  declarations: [
    DeliveryListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DeliveryListComponent
  ]
})
export class DeliveryListComponentModule {}
