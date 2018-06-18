import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-button-detail',
  templateUrl: 'button-detail.html',
})
export class ButtonDetailPage {

  button = {};

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.button = this.navParams.get('button');
  }

  public confirmUnlink(trigger: string) {
    let alert = this.alertCtrl.create({
      title: "Confirmar desvinculacion",
      message: `Seguro que quiere desvincular el boton de "${trigger}"?`,
      buttons: [
        {
          text: "Desvincular",
        },
        {
          text: "Volver"
        }
      ]
    });
    alert.present();
  }

  public confirmDeletion(button: string) {
    let alert = this.alertCtrl.create({
      title: "Confirmar eliminacion",
      message: `Seguro que quiere eliminar el boton "${button}"?`,
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
