import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

import { Service, ServiceProvider } from "../../providers/service/service";
import { Pack, Order, OrderProvider } from "../../providers/order/order";
import { Product, ProductProvider } from "../../providers/product/product";

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  service: Service;
  order: Order;
  products: (Product&Pack)[];
  cost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public orderProvider: OrderProvider, public serviceProvider: ServiceProvider, public productProvider: ProductProvider) {
    this.order = this.orderProvider.getOrder(this.navParams.get('order'));
    this.service = this.serviceProvider.getService(this.order.serviceId);
    this.products = this.order.packs.map(pack => {
      return {...pack,...this.productProvider.getProduct(pack.productId)};
    });
    this.cost = this.products.reduce((sub, product) => sub+product.amount*product.price, 0);
  }

  public addProduct() {

  }

  public confirmDeletion(product: Product) {
    let alert = this.alertCtrl.create({
      title: "Confirmar eliminacion",
      message: `Seguro que quiere eliminar el producto "${product.name}"?`,
      buttons: [
        {
          text: "Eliminar",
          handler: () => {
            this.orderProvider.removeProduct(product.id, this.order.id);
            this.order = this.orderProvider.getOrder(this.order.id);
            this.products = this.order.packs.map(pack => {
              return {...pack,...this.productProvider.getProduct(pack.productId)};
            });
            this.cost = this.products.reduce((sub, product) => sub+product.amount*product.price, 0);
          }
        },
        {
          text: "Volver"
        }
      ]
    });
    alert.present();
  }

}
