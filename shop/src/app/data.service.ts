import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  sitemenu:string[] = ["Homdddd","Elements","Products","Pages","Blog","About As","Contact"]

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('/getproducts');
    
  }
  removeProduct(item){
    let obj = {id: item._id};
    return this.http.post('/removeproduct',obj,{responseType:'text'})
  }
}
