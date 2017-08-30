import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabtransPage } from './tabtrans';
import { HomePage } from '../home/home';

@NgModule({
  declarations: [
    TabtransPage,
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabtransPage),
  ]
})
export class TabtransPageModule {}
