import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {

  services = [
    {id: 1, icon: "coto.png", name: "Coto", stars: 4.4, telephone: "0800-222-1234", orders: [
        {name: "Compra semanal", description: "Insumos basicos", price: 950},
        {name: "Alimento para frida", description: "Dog chow", price: 580}
      ]},
    {id: 2, icon: "jumbo.png", name: "Jumbo", stars: 4.2, telephone: "0800-436-6452", orders: []},
    {id: 3, icon: "nobleRepulgue.png", name: "Noble repulgue", stars: 3.7, telephone: "0800-756-2524", orders: [
        {name: "Docena simple", description: "6 carne y 6 JQ", price: 360}
      ]}
  ];

  constructor(private storage: Storage) {

  }

  public getServices() {
    return this.services;
  }

  public getService(id: number) {
    return this.services.filter(service => service.id === id)[0];
  }

}
