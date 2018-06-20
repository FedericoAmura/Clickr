import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Purchase, PurchaseProvider} from "../../providers/purchase/purchase";
import { Service, ServiceProvider} from "../../providers/service/service";

@IonicPage()
@Component({
  selector: 'page-purchase-detail',
  templateUrl: 'purchase-detail.html',
})
export class PurchaseDetailPage {

  purchase: Purchase;
  service: Service;

  constructor(public navCtrl: NavController, public navParams: NavParams, public purchaseProvider: PurchaseProvider, public serviceProvider: ServiceProvider) {
    this.purchase = this.purchaseProvider.getPurchase(this.navParams.get('purchase'));
    this.service = this.serviceProvider.getService(this.purchase.serviceId);
  }

}
