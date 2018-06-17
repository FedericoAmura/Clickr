import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {

  services = [
    {icon: "coto.png", name: "Coto", stars: 4.4},
    {icon: "jumbo.png", name: "Jumbo", stars: 4.2},
    {icon: "nobleRepulgue.png", name: "Noble repulgue", stars: 3.7}
  ];

  constructor(public navCtrl: NavController) {

  }

}
