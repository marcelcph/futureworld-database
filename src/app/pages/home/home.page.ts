import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 60,
    breakpoints: {
        315: {
            spaceBetween: 20,
            slidesPerView:'1.3'
        },

        768: {
          spaceBetween: 20,
          slidesPerView:'2.5'
      },

        780: {
          spaceBetween: 60,
          slidesPerView:'3.2'
      },

      1024: {
        spaceBetween: 60,
        slidesPerView:'3.5'
    },

    1188: {
      spaceBetween: 60,
      slidesPerView:'3.4'
  },

      2560: {
        spaceBetween: 20,
        slidesPerView:'3.5'
    }
    }
}

constructor() {
}

ngOnInit() {
}

}
