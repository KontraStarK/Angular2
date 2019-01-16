import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { CartService } from './cart.service';
import { RouterModule,Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component'

const routerApp:Routes =[
  {path:"",component:MainComponent},
  {path:"cart",component:CartComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MobileMenuComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    SliderComponent,
    MainComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routerApp)

  ],
  providers: [DataService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
