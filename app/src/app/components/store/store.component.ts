import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  listProducts : any[] = [
    {
      category : "Mouse",
      title : "Logitech – MX ANYWHERE",
      oldPrice : "320.00",
      newPrice : "290.00",
      image1 : "https://picsum.photos/200/200?random=1"
    },
    {
      category : "Mouse",
      title : "Logitech – MX ANYWHERE",
      oldPrice : "320.00",
      newPrice : "290.00",
      image1 : "https://picsum.photos/200/200?random=2"
    },
    {
      category : "Mouse",
      title : "Logitech – MX ANYWHERE",
      oldPrice : "320.00",
      newPrice : "290.00",
      image1 : "https://picsum.photos/200/200?random=3"
    },
    {
      category : "Mouse",
      title : "Logitech – MX ANYWHERE",
      oldPrice : "320.00",
      newPrice : "290.00",
      image1 : "https://picsum.photos/200/200?random=4"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
