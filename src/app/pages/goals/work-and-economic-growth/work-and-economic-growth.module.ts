import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkAndEconomicGrowthPageRoutingModule } from './work-and-economic-growth-routing.module';

import { WorkAndEconomicGrowthPage } from './work-and-economic-growth.page';
import { NavComponent } from 'src/app/components/main/nav/nav.component';
import { HeroComponent } from 'src/app/components/goals/hero/hero.component';
import { SubheroComponent } from 'src/app/components/goals/subhero/subhero.component';
import { DefaultTextComponent } from 'src/app/components/goals/default-text/default-text.component';
import { VideoComponent } from 'src/app/components/goals/video/video.component';
import { TextSliderComponent } from 'src/app/components/goals/text-slider/text-slider.component';
import { FactBoxComponent } from 'src/app/components/goals/fact-box/fact-box.component';
import { ImageComponent } from 'src/app/components/goals/image/image.component';
import { QuoteComponent } from 'src/app/components/goals/quote/quote.component';
import { NextProjectComponent } from 'src/app/components/goals/next-project/next-project.component';
import { SecondaryFooterComponent } from 'src/app/components/main/secondary-footer/secondary-footer.component';
import { SecondaryDefaultTextComponent } from 'src/app/components/goals/secondary-default-text/secondary-default-text.component';
import { BulletPointsOnTwoSectionsDefaultComponent } from 'src/app/components/goals/bullet-points-on-two-sections-default/bullet-points-on-two-sections-default.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkAndEconomicGrowthPageRoutingModule,
    SwiperModule
  ],
  declarations: [WorkAndEconomicGrowthPage,
    NavComponent,
    HeroComponent,
    SubheroComponent,
    DefaultTextComponent,
    VideoComponent,
    TextSliderComponent,
    FactBoxComponent,
    ImageComponent,
    QuoteComponent,  
    NextProjectComponent,  
    SecondaryFooterComponent,
    SecondaryDefaultTextComponent,
    BulletPointsOnTwoSectionsDefaultComponent
  ]
})
export class WorkAndEconomicGrowthPageModule {}
