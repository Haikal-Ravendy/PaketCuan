import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Account } from 'src/entities/account';

@Component({
  selector: 'app-top-up-modal',
  templateUrl: './top-up-modal.component.html',
  styleUrls: ['./top-up-modal.component.scss'],
})
export class TopUpModalComponent {
  value: number;


  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(this.value);
  }
}
