import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopUpDetailPageRoutingModule } from './top-up-detail-routing.module';

import { TopUpDetailPage } from './top-up-detail.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopUpDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TopUpDetailPage]
})
export class TopUpDetailPageModule {}
