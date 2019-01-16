import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product
  @Output() eventProduct =new EventEmitter();
  path:string = '../../assets/'
  
  constructor(private dataService: DataService,
              private cartService: CartService) { }
  
  sendEvent(){
    this.eventProduct.emit()
  }
  removeProduct(item){
    console.log(item);
    this.dataService.removeProduct(item).subscribe(data =>{
      console.log(data);
      this.sendEvent();
    })
  }
  bindImg(){
    if(!this.product.path)
    return this.path+"img270_300.png";
    return this.path+this.product.path; 
  }

  ngOnInit() {
  }

}
