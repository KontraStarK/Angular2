
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  i:number=0;
  path:string='../../assets/slider/'
  masSlide;
  activeSlide;
  nextSlide;
  activeLeft;
  nextLeft;
  trans=false;
  timer;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.masSlide=this.dataService.masSlide;
    this.activeSlide=this.masSlide[0];
    this.nextSlide=this.activeSlide;
    this.startSlider();
  }

  startSlider(){
    this.timer=setInterval(()=>{
      this.setNextSlide();
    },5000)
  }

  bindImg(item){
    if(!item.img)
    return this.path+"800_500.png";
    
    return this.path+item.img;
  }

  stopSlider(){
    clearInterval(this.timer);
  }

  setTrans(item){
    if(item==this.activeSlide && this.trans)
    return true;
    if(item==this.nextSlide && this.trans)
    return true;
    return false;
  }

  setLeft(item){
    if(item==this.activeSlide)
    return this.activeLeft;
    if (item==this.nextSlide)
    return this.nextLeft;
    return;
  }

  setNextSlide(){
    this.activeSlide=this.masSlide[this.i];
    if(this.i==this.masSlide.length-1)
    this.i=0;
    else
    this.i++;
    this.nextSlide=this.masSlide[this.i];
    this.trans=true;
    this.activeLeft='-100%';
    this.nextLeft=0;
    this.trans=true;
    setTimeout(()=>{
        this.trans=false;
        this.activeLeft='100%';
    },1000)
  }

  setBackSlide(){
    this.activeSlide=this.masSlide[this.i];
    if(this.i==0)
    this.i=this.masSlide.length-1;
    else
    this.i--;
    
    this.nextSlide=this.masSlide[this.i];
    this.nextLeft='-100%';
    this.activeLeft=0;
    setTimeout(()=>{
      this.trans=true;
      this.activeLeft='100%';
      this.nextLeft=0;
      setTimeout(()=>{
        this.trans=false;
      },1000)
    },10)
  }
}
