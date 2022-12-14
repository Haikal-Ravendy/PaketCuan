import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayDetailPage } from './send-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PayDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayDetailPageRoutingModule {}
