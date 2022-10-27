import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayDetailPageRoutingModule } from './send-detail-routing.module';

import { PayDetailPage } from './send-detail.page';

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
