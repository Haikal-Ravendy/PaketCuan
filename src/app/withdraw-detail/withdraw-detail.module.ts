import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawDetailPageRoutingModule } from './withdraw-detail-routing.module';

import { WithdrawDetailPage } from './withdraw-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawDetailPageRoutingModule
  ],
  declarations: [WithdrawDetailPage]
})
export class WithdrawDetailPageModule {}
