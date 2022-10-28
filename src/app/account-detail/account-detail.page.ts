import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/dao/account.service';
import { Account } from 'src/entities/account';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  account: any;

  constructor(private router: Router, private location: Location) {
    this.account = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }


}
