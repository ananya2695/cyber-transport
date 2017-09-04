import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListDatetimesComponent } from './list-datetimes';

@NgModule({
  declarations: [
    ListDatetimesComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListDatetimesComponent
  ]
})
export class ListDatetimesComponentModule {}
