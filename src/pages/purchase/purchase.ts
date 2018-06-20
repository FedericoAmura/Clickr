import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';

import { PurchaseProvider } from "../../providers/purchase/purchase";

@IonicPage()
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html'
})
export class PurchasePage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public purchaseProvider: PurchaseProvider) {

  }

  public getPurchases() {
    return this.purchaseProvider.getPurchases();
  }

  public loadPurchase(purchaseId) {
    this.navCtrl.push('PurchaseDetailPage', {purchase: purchaseId});
  }

  public confirmDeletion(purchase) {
    let alert = this.alertCtrl.create({
      title: "Cancelar compra",
      message: `Seguro que quiere cancelar la compra "${purchase.name}"?`,
      buttons: [
        {
          text: "Cancelar",
        },
        {
          text: "Volver"
        }
      ]
    });
    alert.present();
  }

}
