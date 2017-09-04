import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberParcelPage } from './number-parcel';

@NgModule({
  declarations: [
    NumberParcelPage,
  ],
  imports: [
    IonicPageModule.forChild(NumberParcelPage),
  ],
  exports: [
    NumberParcelPage
  ]
})
export class NumberParcelPageModule {}
