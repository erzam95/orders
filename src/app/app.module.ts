import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/materal.module';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderDetailComponent,
    ProductsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderDetailComponent]
})
export class AppModule { }
