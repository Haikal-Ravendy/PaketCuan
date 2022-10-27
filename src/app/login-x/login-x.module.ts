import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginXPageRoutingModule } from './login-x-routing.module';

import { LoginXPage } from './login-x.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginXPageRoutingModule
  ],
  declarations: [LoginXPage]
})
export class LoginXPageModule {}
