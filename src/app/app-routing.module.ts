import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'poverty',
    loadChildren: () => import('./pages/goals/poverty/poverty.module').then( m => m.PovertyPageModule)
  },
  {
    path: 'consumption-and-production',
    loadChildren: () => import('./pages/goals/consumption-and-production/consumption-and-production.module').then( m => m.ConsumptionAndProductionPageModule)
  },
  {
    path: 'reduced-inequalities',
    loadChildren: () => import('./pages/goals/reduced-inequalities/reduced-inequalities.module').then( m => m.ReducedInequalitiesPageModule)
  },
  {
    path: 'work-and-economic-growth',
    loadChildren: () => import('./pages/goals/work-and-economic-growth/work-and-economic-growth.module').then( m => m.WorkAndEconomicGrowthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
