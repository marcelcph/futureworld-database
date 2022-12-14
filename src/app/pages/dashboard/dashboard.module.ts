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
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { DarkNavComponent } from 'src/app/components/main/dark-nav/dark-nav.component';
import { NextProjectComponent } from 'src/app/components/goals/next-project/next-project.component';
import { SecondaryFooterComponent } from 'src/app/components/main/secondary-footer/secondary-footer.component';

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
    DarkNavComponent, NextProjectComponent, SecondaryFooterComponent, 
  ]
})
export class DashboardPageModule {}
