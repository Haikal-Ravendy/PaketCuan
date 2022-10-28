import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HexBase64Latin1Encoding } from 'crypto';
import { ModalController } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { TopUpModalComponent } from '../components/top-up-modal/top-up-modal.component';
import { Router } from '@angular/router';
import { AccountService } from '../services/dao/account.service';
import { Account } from 'src/entities/account';

@Component({
  selector: 'app-top-up-detail',
  templateUrl: './top-up-detail.page.html',
  styleUrls: ['./top-up-detail.page.scss'],
})
export class TopUpDetailPage implements OnInit {

  features = [
    {id: 1, name: 'Rp.10.000', icon: 'assets/icons/money1.png', value: 10000},
    {id: 2, name: 'Rp.50.000', icon: 'assets/icons/money2.png', value: 50000},
    {id: 3, name: 'Rp.100.000', icon: 'assets/icons/money3.png', value: 100000},
    {id: 4, name: 'Rp.250.000', icon: 'assets/icons/money4.png', value: 250000},
    {id: 5, name: 'Rp.500.000', icon: 'assets/icons/money5.png', value: 500000},
    {id: 6, name: 'Rp.999.000', icon: 'assets/icons/money6.png', value: 999000},
  ];
  value: number;
  selectedMenuId: number;
  balance: number;
  amount: number;
  account: any;
  isModalValue = false;
  constructor(
    private location: Location,
    private modalCtrl: ModalController,
    private router: Router,
    private accountService: AccountService
  ) {
    this.account = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
  }
  selectItem(menu: any){
    this.isModalValue = false;
    this.value = menu.value;
    this.selectedMenuId = menu.id;
  }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TopUpModalComponent,
    });
    modal.present();

    modal.onDidDismiss().then(data => {
      console.log('data', data);
      this.selectedMenuId = -1;
      this.isModalValue = true;
      this.value = Number(data.data);
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

  submit(){
    console.log('value ', this.value);

    this.account.balance += this.value;
    const times = this.formatTime(new Date());
    const history = {name: 'Top up', time: times, amount: this.value,color: 'success'};
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
    this.router.navigateByUrl('home',{state: this.account});

  }

  goBack(): void {
    this.location.back();
  }
}
