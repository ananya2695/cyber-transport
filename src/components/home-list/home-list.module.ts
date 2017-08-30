import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HomeListComponent } from './home-list';

@NgModule({
  declarations: [
    HomeListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HomeListComponent
  ]
})
export class HomeListComponentModule {}
