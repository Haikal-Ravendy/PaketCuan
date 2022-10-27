import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-detail',
  templateUrl: './pay-detail.page.html',
  styleUrls: ['./pay-detail.page.scss'],
})
export class PayDetailPage implements OnInit {

  cardNumber: number;
  amount: number;
  constructor() { }

  ngOnInit() {
  }

  submit() {
    //
  }
}
