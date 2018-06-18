import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage {

  service = {};

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.service = this.navParams.get('service');
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
