import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html'
})
export class PurchasePage {

  purchases = [
    {id: 1, name: "Coto - Compra semanal", status: "Entregado", cancellable: false, when: "2018/06/11 18:35:25"},
    {id: 2, name: "Coto - Compra semanal", status: "En camino", cancellable: true, when: "Hace 2 horas"}
  ];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  public confirmDeletion(button: string) {
    let alert = this.alertCtrl.create({
      title: "Cancelar compra",
      message: `Seguro que quiere cancelar la compra "${button}"?`,
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
