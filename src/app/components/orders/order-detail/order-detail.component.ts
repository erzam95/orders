import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderDetails: Order;

  constructor(private dialogRef: MatDialogRef<OrderDetailComponent>,
              @Inject(MAT_DIALOG_DATA) data: Order) {
    this.orderDetails = data;
  }

  ngOnInit() {
  }

  removeItem(item) {
    this.orderDetails.items.splice(item.productId, 1);
    if (this.orderDetails.items.length > 0) { this.orderDetails.total = String(+this.orderDetails.total - item.total); }
    else { this.orderDetails.total = String(0); }
  }

  placeOrder(order: Order) {
    console.log('Order has been successfully placed =>' + JSON.stringify(order));
  }

}
