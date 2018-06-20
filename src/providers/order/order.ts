import {Injectable} from '@angular/core';

@Injectable()
export class OrderProvider {

  orders: Order[] = [
    {id: 1, serviceId: 1, name: "Compra semanal", description: "Insumos basicos", packs: [
        {productId: 1, amount: 3},
        {productId: 2, amount: 1},
        {productId: 3, amount: 1}]},
    {id: 2, serviceId: 1, name: "Alimento para frida", description: "Dog chow", packs: [
        {productId: 4, amount: 1}]},
    {
      id: 3, serviceId: 3, name: "Docena simple", description: "6 carne y 6 JQ", packs: [
        {productId: 5, amount: 6},
        {productId: 5, amount: 6}
      ]
    }
  ];

  constructor() {

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
  packs: Pack[];
}

export class Pack {
  productId: number;
  amount: number;
}
