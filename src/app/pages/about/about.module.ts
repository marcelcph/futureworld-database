import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

import { HeroComponent } from 'src/app/components/about/hero/hero.component';
import { NavComponent } from 'src/app/components/main/nav/nav.component';
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { QuoteComponent } from 'src/app/components/about/quote/quote.component';
import { HowItHelpsComponent } from 'src/app/components/about/how-it-helps/how-it-helps.component';
import { AboutUsTextboxComponent } from 'src/app/components/about/about-us-textbox/about-us-textbox.component';
import { InfoWithImageComponent } from 'src/app/components/about/info-with-image/info-with-image.component';
import { FaqComponent } from 'src/app/components/about/faq/faq.component';
import { SecondaryFooterComponent } from 'src/app/components/main/secondary-footer/secondary-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage,
    HeroComponent,
    NavComponent,
    LightNavComponent,
    QuoteComponent,
    HowItHelpsComponent,
    AboutUsTextboxComponent,
    InfoWithImageComponent,
    FaqComponent,
    SecondaryFooterComponent]
})
export class AboutPageModule {}
