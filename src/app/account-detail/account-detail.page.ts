import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/dao/account.service';
import { Account } from 'src/entities/account';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  account: any;

  constructor() { }

  ngOnInit() {
  }


}
