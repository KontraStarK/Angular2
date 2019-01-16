import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  cartMas=[]
  

  constructor() { }

  addProductCart(item){
    this.cartMas.push(item);
    console.log(this.cartMas);
  }

  deleteProductCart(item){
    var pos=this.cartMas.indexOf(item);
    this.cartMas.splice(pos,1);
  }
  viewCartCount(){
    if(!this.cartMas.length)
    return '';
    if(this.cartMas.length<10)
    return '0'+this.cartMas.length;
    return this.cartMas.length;
  }
  sumTotal(){
    if(!this.cartMas.length)
    return 0;
    return this.cartMas.reduce((res,item)=>{
      return res+item.price;
    },0)
  }

}
