import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

import { LogoutLightComponent } from 'src/app/components/main/logout-light/logout-light.component';
import { DarkNavComponent } from 'src/app/components/main/dark-nav/dark-nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage,
    LogoutLightComponent]
})
export class AdminPageModule {}
