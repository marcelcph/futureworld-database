import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/dashboard/test/test.component';

import { AuthGuard } from '@auth0/auth0-angular';

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
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {path:'test',component:TestComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
