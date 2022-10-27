import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayDetailPageRoutingModule } from './pay-detail-routing.module';

import { PayDetailPage } from './pay-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayDetailPageRoutingModule
  ],
  declarations: [PayDetailPage]
})
export class PayDetailPageModule {}
