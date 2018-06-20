import { Injectable } from '@angular/core';

@Injectable()
export class ProductProvider {

  products: Product[] = [
    {id: 1, serviceId: 1, name: "Fideos Luchetti 150g", price: 35},
    {id: 2, serviceId: 1, name: "Patys Goodmark 8u", price: 120},
    {id: 3, serviceId: 1, name: "Lechuga 1kg", price: 50},
    {id: 4, serviceId: 1, name: "Dog Chow 7.5kg", price: 750},
    {id: 5, serviceId: 3, name: "Empanada carne", price: 25},
    {id: 6, serviceId: 3, name: "Empanada jamon y queso", price: 25}
  ];

  constructor() {

  }

  public getOrders() {
    return this.products;
  }

  public getProduct(id: number) {
    return this.products.filter(product => product.id === id)[0];
  }

  public getServiceProducts(serviceId: number) {
    return this.products.filter(product => product.serviceId === serviceId);
  }

}

export class Product {
  id: number;
  serviceId: number;
  name: string;
  price: number;
}
