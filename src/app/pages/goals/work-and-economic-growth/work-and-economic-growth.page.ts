import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-work-and-economic-growth',
  templateUrl: './work-and-economic-growth.page.html',
  styleUrls: ['./work-and-economic-growth.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkAndEconomicGrowthPage implements OnInit {

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
    title: 'How can you as a company implement UN’s sustainable development goal: economic growth?',
  }

  subherodata={
    introtext: '“Sustained and inclusive economic growth can drive progress, create decent jobs for all and improve living standards.',
    pagelink: "https://futureworld.vercel.app/work-and-economic-growth"
  }

  primarytextdata={
    titlepartone: 'Decent work',
    titleparttwo: '',
    titlepartthree: 'for all',

    textone: "UN’s Global Goals obligate the participating countries to pursues a job-creating policy and to eradicate forced labour, slaves, and human trafficking. The goal is for all men and women to have the opportunity for full employment by 2030.",
    texttwo: "Employment has been very high In many countries such as Denmark and the USA until the corona-pandemic; but a look around the world shows that this is not the case in a lot of countries. Combining economic growth with sustainability is difficult to say the least, as growth has historically been accompanied by unsustainable actions.",
    cta: "Our goals and values",
    ctalink: 'https://www.pexels.com/da-dk/video/huse-stov-fattig-faellesskab-3695933/',
    textthree: 'A key challenge here is to find out whether and how economic growth can be combined with, for example, environmental sustainability.',
  }

  imageonedata={
    imagelink: './assets/img/Plants-economic-growth.webp',
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

  secondarylistdata={
    titlepartone: 'Facts & Ideas',
    titleparttwo: '',
    titlepartthree: '',

    textone: "Facts",
    listone: "Men earn 12.5% more than women in 40 out of 45 countries with data.",
    listtwo:"The Unemployment rate in Europe is 6.3% in 2019, while the rate in Germany is 3.1%.",
    listthree:"470 million jobs are needed globally for new entrants to the labour market between 2016 and 2030.",
    listfour:"",
    listfive:"",
    listsix:"",
    textthreetitle: "Idea:",
    textthree: "Companies can be proactive in employing people from diverse backgrounds, and provide decent work conditions.",
    textfour: "Young workers can be provided with career counseling to help them identify their aptitudes/abilities",
    textfive: "Parents and caregivers can be provided flexible work hours and the possibility to work from home as and when needed.",
    textsix: "Treat all workers, from the CEO to the plumber, with equal amounts of respect and appreciation. Everyone is doing their part in contributing to economic growth.",
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
    imagelink: './assets/img/indian-worker.webp',
  }

  quotedata={
    textquote: "“Economic growth doesn’t mean anything if it leaves people out.”"
  }

  nextprojectdata={
    textonelineone: 'No',
    textonelinetwo: 'Poverty',
    nextporjectpathone: '/poverty',

    texttwolineone: 'Less',
    texttwolinetwo: 'Inequality',
    nextporjectpathtwo: '/reduced-inequalities',

  }



  constructor() { }

  ngOnInit() {
  }

}