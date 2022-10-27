import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginXPage } from './login-x.page';

const routes: Routes = [
  {
    path: '',
    component: LoginXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginXPageRoutingModule {}
