/* eslint-disable max-len */
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  DECIMAL_SEPARATOR='.';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  GROUP_SEPARATOR=',';
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
    alert.onDidDismiss().then(async data => {
      const pwd = data.data.values[0];
      if(this.account.password !== pwd){
        await this.pwdWrongAlert();
      }
      else{
        if(this.amount > this.account.balance){
          await this.balanceIsInsufficient();
        }
        else{
          this.account.balance -= this.amount;
          const times = this.formatTime(new Date());
          const history = {name: 'Withdraw money with the amount of Rp. ' + this.amount.toLocaleString('de-DE'), time: times, amount: this.amount,color: 'danger'};
          if(this.account.history.length === 0){

            const histories = [history];
            this.account.history = JSON.stringify(histories);

          }
          else{
            const histories = JSON.parse(this.account.history);
            histories.push(history);
            this.account.history = JSON.stringify(histories);

          }
          this.accountService.insertOrUpdate(this.account);
          this.router.navigateByUrl('home',{state:this.account});
        }
      }

    });
  }

  formatTime(date: Date){
    let hour = date.getHours();
    let minutes: string|number = date.getMinutes();
    const ampm = hour > 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hour + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  async pwdWrongAlert(){
    const alert = await this.alertController.create({
      header: 'Password salah!',
      message: 'Password yang diinput salah',
      buttons: ['OK'],
    });

    await alert.present();
}

async balanceIsInsufficient(){
  const alert = await this.alertController.create({
    header: 'Balance tidak mencukupi!',
    message: 'Balance tidak mencukupi',
    buttons: ['OK'],
  });

  await alert.present();
}
}


