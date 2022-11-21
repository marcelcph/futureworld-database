import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeroComponent } from 'src/app/components/home/hero/hero.component';
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { SubHeroComponent } from 'src/app/components/home/sub-hero/sub-hero.component';
import { SliderComponent } from 'src/app/components/home/slider/slider.component';
import { FourGoalsComponent } from 'src/app/components/home/four-goals/four-goals.component';
import { HowHelpBusinessComponent } from 'src/app/components/home/how-help-business/how-help-business.component';
import { FollowUsComponent } from 'src/app/components/home/follow-us/follow-us.component';
import { FooterComponent } from 'src/app/components/main/footer/footer.component';
import { HomePageRoutingModule } from './home-routing.module';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePage,
    LightNavComponent,
    HeroComponent,
    SubHeroComponent,
    SliderComponent,
    FourGoalsComponent,
    HowHelpBusinessComponent,
  FollowUsComponent,
  FooterComponent]
})
export class HomePageModule {}
