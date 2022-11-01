import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';
import { Account } from 'src/entities/account';
import { AccountService } from '../services/dao/account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isClicked ;
  features = [
    {id: 1, name: 'TOP UP', icon: 'assets/icons/topup.png',page: 'top-up-detail'},
    {id: 2, name: 'WITHDRAW', icon: 'assets/icons/withdrawal.png',page: 'withdraw-detail'},
    {id: 3, name: 'SEND', icon: 'assets/icons/send.png',page: 'send-detail'},
    {id: 4, name: 'SCAN QR', icon: 'assets/icons/qr.jpg',page: 'ke-camera'}
  ];


  transactions;
  removed;

 view = [];

  slideOpt = {
    slidesPerView: 1,
    autoplay: true,
  };

  account: any;


  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  sample: boolean = false;


  constructor(private router: Router, private accountService: AccountService) {
    this.account = this.router.getCurrentNavigation().extras.state;
    console.log(this.account);
    this.sample = true;
    this.view = this.removed;
  }

  async ionViewDidEnter(){
    console.log('cek', this.account.history);
    console.log('history type ', typeof this.account.history);
    const hist = JSON.parse(this.account.history);
    console.log('history dalam JSON',hist);
    this.transactions = hist;
    if(this.transactions!== null){

    if(this.transactions.length <2){
      this.removed = this.transactions;
      console.log('removed ', this.removed);

    }
    else{
      this.removed = this.transactions.slice(0,2);
    }
    }
  }

  ngOnInit(): void {
    this.view = [];
    const hist = JSON.parse(this.account.history);
    if(hist!=null){
      hist.forEach((element,index) => {
        if(index <2){
          this.view.push(element);
        }
      });
    }

    console.log('view',this.view);


  }

  goToFeature(url: string,){
    this.router.navigateByUrl(url,{state:this.account});
  }

  goToDetail(){
    console.log('on detail menu');
    this.router.navigate(['account-detail'], {state:this.account});
  }



  onClicked(){
    console.log('transaction 1', this.transactions);
    if(this.sample === false){
      console.log('false', this.sample);
      this.sample = true;
     this.view = this.removed;

    }else if (this.sample === true){
      console.log('true', this.sample);
      this.sample = false;
      this.view = this.transactions;
    }

  }

  showButton(){

  }

  async takeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    console.log('Result Image', image.base64String);
    // // Set avatar value to contact form
    // this.contactForm.get('avatar').setValue(this.avatar);

    // this.cdr.detectChanges();
  }

}
