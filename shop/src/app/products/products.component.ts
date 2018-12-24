import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;

  productsMenu = [
    'Popular Products', 'New Arrival', 'Best Seller', 'Special Offer'
  ]



  activeMenu = this.productsMenu[0]
  constructor(private dataService: DataService) { }



  loadProducts() {
    this.dataService.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products);
    })
  }
  clickMenu(item){
    this.activeMenu = item;
  }


  ngOnInit() {
    this.loadProducts();
  }

}
