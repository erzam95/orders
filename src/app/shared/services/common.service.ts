import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Order} from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public setCart: BehaviorSubject<Order> = new BehaviorSubject<Order>(null);
  cart$ = this.setCart.asObservable();
  constructor() { }

  public updateCart(order: Order): void {
    this.setCart.next(order);
  }
}
