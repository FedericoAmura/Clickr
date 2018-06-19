import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceProvider } from "../../providers/service/service";

@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage {

  service = {};

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider) {
    this.service = this.serviceProvider.getService(this.navParams.get('service'));
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
