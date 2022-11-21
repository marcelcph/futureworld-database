import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-reduced-inequalities',
  templateUrl: './reduced-inequalities.page.html',
  styleUrls: ['./reduced-inequalities.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReducedInequalitiesPage implements OnInit {
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
  
        1024: {
          spaceBetween: 10,
          slidesPerView:'2.7'
      },
  
      1498: {
        spaceBetween: 60,
        slidesPerView:'2.8'
    },
  
      2560: {
        spaceBetween: 20,
        slidesPerView:'2.8'
    }
    }
  }

  herodata={
    title: 'To be able to achieve a better world, the ineqaulity must get reduced',
  }

  subherodata={
    introtext: 'Reducing inequalities and ensuring no one is left behind are integral to acheiving the Sustainable Develeopment Goals. Inequality within and among countries is a persistent cause for concern',
    pagelink: "https://futureworld.vercel.app/reduced-inequalities"
  }

  primarytextdata={
    titlepartone: 'All of',
    titleparttwo: 'our',
    titlepartthree: 'Sustainable',

    textone: "The reduction of inequality is one of the 17 global goals. This implies support for safer migration and mobility of people, which is also important for reducing the widening inequality gap.",
    texttwo: "Although a large proportion of the world’s poorest, have been lifted out of poverty – the income potential continues to rise. The richest 10% percent sit on 40% of total global income. From this, inequality is both a national and global problem that requires a global solution. With the 17 goals, the UN states to undertake to increase the regulation and monitoring of the financial sectors and institutions, as well as to increase foreign aid and by increasing foreign investments in the regions where the need is the greatest.",
    cta: "Our goals and values",
    ctalink: 'https://www.pexels.com/da-dk/video/huse-stov-fattig-faellesskab-3695933/',
  }

  imageonedata={
    imagelink: './assets/img/inequality-middle.webp',
  }

  secondarytextdata={
    titlepartone: 'All of',
    titleparttwo: 'our',
    titlepartthree: 'Sustainable',

    textone: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    texttwo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
    cta: "Our goals and values",
    ctalink: 'https://www.pexels.com/da-dk/video/huse-stov-fattig-faellesskab-3695933/',
    textthree: '“Our goal is to help you as a student become less economical worried by giving you access to cheap & modern student apartments. We want to improve your consumption in the household and show you how to save money.',
  }

  smalllistdata={
    titlepartone: 'All of',
    titleparttwo: 'our',
    titlepartthree: 'Sustainable',

    textone: "Facts",
    listone: "The Swiss citizens are 11 times wealthier than the average world citizen.",
    listtwo:"The richest 1% of the world own 44% of the total world’s wealth.",
    listthree:"The United States is home to the highest number of millionaires (585) in the world.",
    textthreetitle: "Ideas:",
    textthree: "Many companies have inclusion policies- for women, old and differently-abled people or the migrants. See if your company has one. Insist on having it if they don’t.",
    textfour: "As much as you earn, also make it a habit to give back to society. Take responsibility for educating a girl in Africa or donate food to the homeless.",
  }

  factboxdata={
    titlepartone: 'Did you',
    titlepartto: 'know',
    titlepartthree: 'these',
    titlepartfour: 'numbers?',

    subtitleone: "More than",
    subtitletwo: "More than",
    subtitlethree: "More than",
    subtitlefour: 'More than',

    textone: "750mil in poverty",
    texttwo: "600mil homeless",
    textthree: "750mil in poverty",
  }

  imagedata={
    imagelink: './assets/img/inequality-bottom.webp',
  }

  quotedata={
    textquote: "“If we do not put inequality at the heart of the global development agenda, we are doomed to failure.”"
  }

  nextprojectdata={
    textonelineone: 'Economic',
    textonelinetwo: 'Growth',
    nextporjectpathone: '/work-and-economic-growth',

    texttwolineone: 'Consumption &',
    texttwolinetwo: 'Production',
    nextporjectpathtwo: '/consumption-and-production',

  }



  constructor() { }

  ngOnInit() {
  }

}