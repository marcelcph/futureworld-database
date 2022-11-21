import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumptionAndProductionPage } from './consumption-and-production.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumptionAndProductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumptionAndProductionPageRoutingModule {}
