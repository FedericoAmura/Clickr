import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {

  services = [
    {icon: "leaf", name: "Coto", stars: 5},
    {icon: "rose", name: "Jumbo", stars: 4},
    {icon: "beer", name: "Noble repulgue", stars: 3}
  ];

  constructor(public navCtrl: NavController) {

  }

}
