import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';
import {CommonService} from '../../services/common.service';
import {Order} from '../../../models/order.model';
import {OrderDetailComponent} from '../../../components/orders/order-detail/order-detail.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() product!: Product;
  cart: Order;
  constructor(private commonService: CommonService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.commonService.cart$.subscribe(result => {
      this.cart = result;
    });
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
