import { Component, OnInit } from '@angular/core';
import { orders } from './orders';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {Order} from '../../models/order.model';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import { products } from '../products/products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'customer', 'orders', 'action'];
  dataSource = orders;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showOrder(order: Order): void {
     this.dialog.open(OrderDetailComponent, {
      width: '500px',
      height: '100%',
      disableClose: true,
      position: {
        top: '0',
        bottom: '0',
        right: '0',
      },
     data: order
    });
  }

}
