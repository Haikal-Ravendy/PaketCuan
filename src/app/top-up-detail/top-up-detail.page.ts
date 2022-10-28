import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HexBase64Latin1Encoding } from 'crypto';
import { ModalController } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { TopUpModalComponent } from '../components/top-up-modal/top-up-modal.component';

@Component({
  selector: 'app-top-up-detail',
  templateUrl: './top-up-detail.page.html',
  styleUrls: ['./top-up-detail.page.scss'],
})
export class TopUpDetailPage implements OnInit {

  features = [
    {id: 1, name: 'Rp.10.000', icon: 'assets/icons/money1.png', page: ''},
    {id: 2, name: 'Rp.50.000', icon: 'assets/icons/money2.png', page: ''},
    {id: 3, name: 'Rp.100.000', icon: 'assets/icons/money3.png', page: ''},
    {id: 4, name: 'Rp.250.000', icon: 'assets/icons/money4.png', page: ''},
    {id: 5, name: 'Rp.500.000', icon: 'assets/icons/money5.png', page: ''},
    {id: 6, name: 'Rp.999.000', icon: 'assets/icons/money6.png', page: ''},
  ];

  balance: number;
  amount: number;
  constructor(
    private location: Location,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TopUpModalComponent,
    });
    modal.present();
  }

  submit(){
    //
  }

  goBack(): void {
    this.location.back();
  }
}
