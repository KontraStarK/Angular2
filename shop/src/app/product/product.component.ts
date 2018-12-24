import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  DataService
} from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dataService: DataService) {}


  ngOnInit() {}
  @Input() product;
  @Output() eventProduct = new EventEmitter < boolean > ();
  path:string = '../../assets/'
  sendEvent() {
    this.eventProduct.emit(true);
  }
  bindImg(){
    
    if(!this.product.path)
    return this.path+"img270x300.png";
    return this.path+this.product.path;
    
  }
  removeProduct(item) {
    console.log(item);
    this.dataService.removeProduct(item).subscribe(data => {
      console.log(data);
      this.sendEvent();
    })

  }

}
