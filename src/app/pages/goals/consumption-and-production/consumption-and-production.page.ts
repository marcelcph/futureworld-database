import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-consumption-and-production',
  templateUrl: './consumption-and-production.page.html',
  styleUrls: ['./consumption-and-production.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ConsumptionAndProductionPage implements OnInit {

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
    title: 'Ensure sustainable consumption and production patterns',
  }

  subherodata={
    introtext: 'If we are to reach the 2030 deadline, we need the contributions and solutions of private companies. And for many, this will require us to look at every company and products in a new way. This takes more responsibility for our own company and our entire value chain, make demands on our suppliers, enter into new partnerships and investigate the possibility of sustainable product innovation inside and outside the companys.',
    pagelink: "https://futureworld.vercel.app/consumption-and-production"
  }

  primarytextdata={
    titlepartone: 'Use',
    titleparttwo: 'recources',
    titlepartthree: 'responsible',

    textone: "Our overuse of resources such as plastic, concrete, electronics etc. will quite naturally hit a wall in its current form. We will probably experience that material prices will generally rise and that more resources will become decidedly scarce.",
    texttwo: "The 12th world goal obligates countries to work together to ensure that we do not exploit our natural resources and that both the private individuals and common industrial dispose of toxic waste such as chemicals and plastics in a responsible manner.",
    cta: "Our goals and values",
    ctalink: 'https://www.pexels.com/da-dk/video/huse-stov-fattig-faellesskab-3695933/',
    textthree: 'For the richest countries of the world, it applies that they must not only make a huge effort to reduce their own footprint on the world, for example by reducing food waste and clothing consumption, but also helps developing countries economically and technologically to move in a more sustainable direction.',
  }

  imageonedata={
    imagelink: './assets/img/factory-production.webp',
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
    listone: "Be conscious of packaging – the less the better!",
    listtwo:"Choose reusable products. Use an eco-bag for shopping, a reusable water bottle or a cup to reduce your plastic waste.",
    listthree:"Advocate for corporate responsibility. Join petitions and campaigns calling out businesses with unsustainable practices.",
    listfour:"Richest country in the world: Qatar (GNI per capita of $116,799)",
    listfive:"Stay informed. Follow your local news and stay in touch with the Global Goals online or on social media at @TheGlobalGoals.",
    listsix:"",
    textthreetitle: "Idea:",
    textthree: "Be conscious of packaging – the less the better!",
    textfour: "Do some research and buy from companies you know have sustainable practices and don’t harm the environment.",
    textfive: "Choose reusable products. Use an eco-bag for shopping, a reusable water bottle or a cup to reduce your plastic waste.",
    textsix: "Advocate for corporate responsibility. Join petitions and campaigns calling out businesses with unsustainable practices.",
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
    imagelink: './assets/img/windmill-production.webp',
  }

  quotedata={
    textquote: "“Sustainability is not just about adopting the latest energy-efficient technologies or turning to renewable sources of power. Sustainability is the responsibility of every individual every day. It is about changing our behaviour and mindset to reduce power and water consumption, thereby helping to control emissions and pollution levels.”"
  }

  nextprojectdata={
    textonelineone: 'Less',
    textonelinetwo: 'Inequality',
    nextporjectpathone: '/reduced-inequalities',

    texttwolineone: 'No',
    texttwolinetwo: 'Poverty',
    nextporjectpathtwo: '/poverty',

  }



  constructor() { }

  ngOnInit() {
  }

}