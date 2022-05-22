import { Component, OnInit, AfterContentInit } from '@angular/core';

declare const bootstrap : any;

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product : any = {
    category : "Mouse",
    title : "Logitech – MX ANYWHERE",
    oldPrice : "320.00",
    newPrice : "290.00",
    images : [
      {
        index : 0,
        title : "Logitech – MX ANYWHERE",
        url :"https://picsum.photos/200/200?random=1",
        active : true
      },
      {
        index : 1,
        title : "Logitech – MX ANYWHERE",
        url :"https://picsum.photos/200/200?random=2",
        active : false
      },
      {
        index : 2,
        title : "Logitech – MX ANYWHERE",
        url :"https://picsum.photos/200/200?random=3",
        active : false
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {

  }

  prevNextButton(type : number){
    var carousel = bootstrap.Carousel.getInstance(document.querySelector('#product-carousel'));

    if(type == 1){
      carousel.prev();      
      var lit = carousel._activeElement.id.split("_");
      this.changeImage(lit[1]);
    }
    else{
      carousel.next();      
      var lit = carousel._activeElement.id.split("_");
      this.changeImage(lit[1]);
    }
  }

  changeImage(index : number){
    this.product.images.forEach((item : any) => {
      if (item.index == index){
        item.active = true;
      }
      else{
        item.active = false;
      }
    });
  }
}
