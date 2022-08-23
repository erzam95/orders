import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { products } from './products';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CommonService } from '../../shared/services/common.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = products;
  orderForm: FormGroup;
  productList = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      count: new FormControl(),
    });
  }

  addToCart(product: Product) {
    const productCount = this.orderForm.controls.count.value ? +this.orderForm.controls.count.value : 1;

    this.productList.push({
      productId: product.id,
      quantity: productCount,
      unitPrice: product.price,
      total: productCount * +product.price
    });

    const requestModel: Order = {
      id: '3',
      customerId: '3',
      items: this.productList,
      total: this.productList.map(p => p.total).reduce((partialSum, a) => partialSum + a, 0),
      isPlaced: true
    };

    this.commonService.updateCart(requestModel);
  }
}
