import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  i:number = 0;
  
  masSlide = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg']
  activeSlide = this.masSlide[0];
  timer = null;
  path:string = '../../assets/slideImg/'
  bindImg(item){
    return this.path+item;
    
  }
  backSlide(){
    if(!this.i)
    this.i = this.masSlide.length-2;
    else 
    this.i-=2;
    this.setSlide();

  }
  setSlide(){
    if(this.i == this.masSlide.length-1)
    this.i = 0;
    else 
    this.i++;
    this.activeSlide = this.masSlide[this.i];
  }
  stopSlider(){
    clearInterval(this.timer)
  }
  startSlider(){
    this.timer = setInterval(() =>{this.setSlide()},2000);
  }


  constructor() { }
   
  ngOnInit() {
    this.startSlider();
    
  }

}
