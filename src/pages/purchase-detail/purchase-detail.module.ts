import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseDetailPage } from './purchase-detail';

@NgModule({
  declarations: [
    PurchaseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseDetailPage),
  ],
})
export class PurchaseDetailPageModule {}
