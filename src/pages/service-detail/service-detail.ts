import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Service, ServiceProvider } from "../../providers/service/service";
import { Order, OrderProvider } from "../../providers/order/order";

@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage {

  service: Service;
  orders: Order[];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider, public orderProvider: OrderProvider) {
    this.service = this.serviceProvider.getService(this.navParams.get('service'));
    this.orders = this.orderProvider.getServiceOrders(this.service.id);
  }

  public addOrder() {

  }

  public confirmDeletion(button: string) {
    let alert = this.alertCtrl.create({
      title: "Confirmar eliminacion",
      message: `Seguro que quiere eliminar el pedido "${button}"?`,
      buttons: [
        {
          text: "Eliminar",
        },
        {
          text: "Volver"
        }
      ]
    });
    alert.present();
  }
}
