import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopUpModalComponent } from './top-up-modal/top-up-modal.component';


@NgModule({
  imports: [FormsModule, IonicModule.forRoot({})],
  declarations: [TopUpModalComponent],
  exports: [TopUpModalComponent]
})
export class ComponentsModule { }
