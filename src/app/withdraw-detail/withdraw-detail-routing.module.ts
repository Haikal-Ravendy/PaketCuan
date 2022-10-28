import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawDetailPage } from './withdraw-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawDetailPageRoutingModule {}
