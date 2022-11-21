import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReducedInequalitiesPage } from './reduced-inequalities.page';

const routes: Routes = [
  {
    path: '',
    component: ReducedInequalitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReducedInequalitiesPageRoutingModule {}
