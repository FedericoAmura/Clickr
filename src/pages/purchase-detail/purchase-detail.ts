import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Purchase, PurchaseProvider } from "../../providers/purchase/purchase";
import { Service, ServiceProvider } from "../../providers/service/service";
import { Pack } from "../../providers/order/order";
import { Product, ProductProvider } from "../../providers/product/product";

@IonicPage()
@Component({
  selector: 'page-purchase-detail',
  templateUrl: 'purchase-detail.html',
})
export class PurchaseDetailPage {

  service: Service;
  purchase: Purchase;
  products: (Product&Pack)[];
  cost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public productProvider: ProductProvider, public purchaseProvider: PurchaseProvider, public serviceProvider: ServiceProvider) {
    this.purchase = this.purchaseProvider.getPurchase(this.navParams.get('purchase'));
    this.service = this.serviceProvider.getService(this.purchase.serviceId);
    this.products = this.purchase.products.map(pack => {
      return {...pack,...this.productProvider.getProduct(pack.productId)};
    });
    this.cost = this.products.reduce((sub, product) => sub+product.amount*product.price, 0);
  }

}
