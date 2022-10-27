import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-detail',
  templateUrl: './send-detail.page.html',
  styleUrls: ['./send-detail.page.scss'],
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
