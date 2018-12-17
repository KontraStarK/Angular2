import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  constructor(private dataService: DataService) { }
  

  ngOnInit() {
  }
  @Input() product;
  @Output() eventProduct = new EventEmitter <boolean>();
  sendEvent(){
    this.eventProduct.emit(true);
  }
  removeProduct(item){
    console.log(item);
    this.dataService.removeProduct(item).subscribe(data =>{
      console.log(data);
      this.sendEvent();
    })

  }

}
