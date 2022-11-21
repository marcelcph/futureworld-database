import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PovertyPage } from './poverty.page';

const routes: Routes = [
  {
    path: '',
    component: PovertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PovertyPageRoutingModule {}
