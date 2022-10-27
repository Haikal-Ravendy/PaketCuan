import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-send-detail',
  templateUrl: './send-detail.page.html',
  styleUrls: ['./send-detail.page.scss'],
})
export class PayDetailPage implements OnInit {

  icon = 'chevron-back-circle-outline';
  cardNumber: number;
  amount: number;
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  submit() {
    //
  }

  goBack(): void {
    this.location.back();
  }

}
