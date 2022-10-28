import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/dao/account.service';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-withdraw-detail',
  templateUrl: './withdraw-detail.page.html',
  styleUrls: ['./withdraw-detail.page.scss'],
})
export class WithdrawDetailPage implements OnInit {

  icon = 'chevron-back-circle-outline';
  amount: number;
  account: any;
  constructor(
    private location: Location,
    private router: Router,
    private accountService: AccountService,
    private alertController: AlertController) {
    this.account = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit() {
  }

  submit() {

  }

  goBack(): void {
    this.location.back();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your password',
      buttons: [
        {
          text:'Cancel',
          cssClass: 'alert-button-cancel'
        },
        {
          text:'Ok',
          cssClass: 'alert-button-confirm'
        }
      ],
      inputs: [
        {
          placeholder: 'Password',
          type: 'password'
        }
      ]
    });
    await alert.present();
    alert.onDidDismiss().then(data => {
      const pwd = data.data.values[0];
      if(this.account.password !== pwd){
        //
      }

    });
  }

  async pwdWrongAlert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
}
}


