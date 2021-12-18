import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faEnvelope = faEnvelope
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoWidth:true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    autoplay:true,
    center:true,
    autoplayTimeout: 1000,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { }
  

  ngOnInit(): void {
  }

}
