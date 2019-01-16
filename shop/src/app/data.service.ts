import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class DataService {
  mainMenu:string[]=['Home','Elements','Products','Pages','Blog','About As','Contact'];
  masSlide=[{name:'Slide1',img:'img1.jpg'},{name:'Slide2',img:'img2.jpg'},{name:'Slide3',img:'img3.jpg'},{name:'Slide4',img:'img4.jpg'},{name:'Slide5'}];
  constructor(private http: HttpClient) {  }
  getProducts(){
    return this.http.get('/getproducts')
  }
  removeProduct(item){
    let obj = {id:item._id}
    return this.http.post('/removeproduct',obj,
    {responseType:"text"})
  }
}
