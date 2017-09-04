import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalculationComponent } from './calculation';

@NgModule({
  declarations: [
    CalculationComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CalculationComponent
  ]
})
export class CalculationComponentModule {}
