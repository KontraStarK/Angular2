import { Component, OnInit, HostListener } from '@angular/core';
import {DataService} from '../data.service';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:string[];
  
  fixed:boolean=false;
  path:string='../../assets/cart/'

  constructor(private dataService:DataService,
              private cartService:CartService) { }

  @HostListener("window:scroll", []) onWindowScroll() {
      console.log(window.scrollY);
      if(window.scrollY>40)
      this.fixed=true;
      else this.fixed=false;
  }

  ngOnInit() {
    this.menu=this.dataService.mainMenu;
    
  }

  bindImg(){
    return this.path+'100_111.png'
  }
}
