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
    private location: Location
  private router: Router, private accountService: AccountService) {
    this.amount = 0;
    this.cardNumber = 0;
    this.account = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit() {
  }

  async submit() {

    const acc = await this.accountService.findOne({cardNumber: this.cardNumber});
    if(acc){
      if(this.account.balance < this.amount){
        alert('Balance tidak mencukupi untuk mengirim  Rp.' + this.amount.toLocaleString('de-DE'));
      }
      else{
        this.account.balance-=this.amount;
        this.accountService.insertOrUpdate(this.account);

        acc.balance+=this.amount;
        this.accountService.insertOrUpdate(acc);
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
