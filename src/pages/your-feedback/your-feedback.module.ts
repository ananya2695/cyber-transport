import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourFeedbackPage } from './your-feedback';

@NgModule({
  declarations: [
    YourFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(YourFeedbackPage),
  ],
  exports: [
    YourFeedbackPage
  ]
})
export class YourFeedbackPageModule {}
