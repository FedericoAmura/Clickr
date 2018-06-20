import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderProvider {

  orders: Order[] = [
    {id: 1, serviceId: 1, name: "Compra semanal", description: "Insumos basicos", price: 950},
    {id: 2, serviceId: 1, name: "Alimento para frida", description: "Dog chow", price: 580},
    {id: 3, serviceId: 3, name: "Docena simple", description: "6 carne y 6 JQ", price: 360}
  ];

  constructor(private storage: Storage) {

  }

  public getOrders() {
    return this.orders;
  }

  public getOrder(id: number) {
    return this.orders.filter(order => order.id === id)[0];
  }

  public getServiceOrders(serviceId: number) {
    return this.orders.filter(order => order.serviceId === serviceId);
  }

}

export class Order {
  id: number;
  serviceId: number;
  name: string;
  description: string;
  price: number;
}
