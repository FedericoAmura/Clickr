import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonDetailPage } from './button-detail';

@NgModule({
  declarations: [
    ButtonDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonDetailPage),
  ],
})
export class ButtonDetailPageModule {}
