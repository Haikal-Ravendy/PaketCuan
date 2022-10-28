import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AccountService } from '../services/dao/account.service';

@Component({
  selector: 'app-send-detail',
  templateUrl: './send-detail.page.html',
  styleUrls: ['./send-detail.page.scss'],
})
export class PayDetailPage implements OnInit {

  icon = 'chevron-back-circle-outline';
  cardNumber: number;
  amount: number;
  account: any;
  constructor(
    private location: Location,private router: Router, private accountService: AccountService) {
    this.account = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit() {
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

  async submit() {

    const acc = await this.accountService.findOne({cardNumber: this.cardNumber});
    if(acc){
      if(this.account.balance < this.amount){
        alert('Balance tidak mencukupi untuk mengirim  Rp.' + this.amount.toLocaleString('de-DE'));
      }
      else{
        this.account.balance-=this.amount;
        const times = this.formatTime(new Date());
        const history = {name: 'Send money to ' + acc.name , time: times, amount: this.amount,color: 'danger'};
        if(this.account.history.length === 0){

          const histories = [history];
          this.account.history = JSON.stringify(histories);

        }
        else{
          const histories = JSON.parse(this.account.history);
          histories.push(history);
          this.account.history = JSON.stringify(histories);

        }
        console.log('history!',this.account.history);
        this.accountService.insertOrUpdate(this.account);

        acc.balance+=this.amount;
        this.accountService.insertOrUpdate(acc);
        this.router.navigateByUrl('/home',{state:this.account});
      }
    }
    else{
      alert('Nomor kartu tidak terdaftar');
    }
    //
  }

  goBack(): void {
    this.location.back();
  }

}
