import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-top-up-modal',
  templateUrl: './top-up-modal.component.html',
  styleUrls: ['./top-up-modal.component.scss'],
})
export class TopUpModalComponent {

  amount: number;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {

    }
  }
