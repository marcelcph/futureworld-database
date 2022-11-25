import { createComponent, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path: '',component: DashboardPage,    
  pathMatch: 'full',},

 

  {path:'create',component:CreateComponent},
  {path:'read/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
