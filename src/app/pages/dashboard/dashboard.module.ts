import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

import {HttpClientModule} from '@angular/common/http';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { LogoutLightComponent } from 'src/app/components/main/logout-light/logout-light.component';
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { DarkNavComponent } from 'src/app/components/main/dark-nav/dark-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardPage,
    ReadComponent, CreateComponent,TestComponent,
    DarkNavComponent
  ]
})
export class DashboardPageModule {}
