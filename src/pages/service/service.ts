import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {

  services = [
    {icon: "coto.png", name: "Coto", stars: 4.4, telephone: "0800-222-1234", orders: [
        {name: "Compra semanal", description: "Insumos basicos", price: 950},
        {name: "Alimento del perro", description: "Dog chow", price: 580}
      ]},
    {icon: "jumbo.png", name: "Jumbo", stars: 4.2, telephone: "0800-436-6452", orders: []},
    {icon: "nobleRepulgue.png", name: "Noble repulgue", stars: 3.7, telephone: "0800-756-2524", orders: [
        {name: "Docena simple", description: "6 carne y 6 JQ", price: 360}
      ]}
  ];

  constructor(public navCtrl: NavController) {

  }

  public loadService(service) {
    this.navCtrl.push('ServiceDetailPage', {service: service});
  }

}
