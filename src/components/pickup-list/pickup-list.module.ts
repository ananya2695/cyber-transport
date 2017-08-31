import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PickupListComponent } from './pickup-list';

@NgModule({
  declarations: [
    PickupListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PickupListComponent
  ]
})
export class PickupListComponentModule {}
