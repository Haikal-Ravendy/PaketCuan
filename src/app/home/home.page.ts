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
    {id: 4, name: 'PAY', icon: 'assets/icons/barcode.png',page: 'ke-camera'}
  ];


  promos = [
    'https://bankmega.com/media/filer_public/b1/1c/b11caa26-309b-4ad4-a153-c30c19a6974d/makan_take-away-delivery.jpg',
    'https://bankmega.com/media/filer_public/ff/07/ff07828a-a5c2-4580-9cd3-0106aa69ff03/bm_asset_yes_-_food_medan_bmnew.jpg',
    'https://awsimages.detik.net.id/community/media/visual/2020/08/14/thumbnail-vod-2.png?w=700&q=90',
    'https://bankmega.com/media/filer_public/82/1b/821b1b8b-728d-4e79-93d3-42e0496a6ff8/mbmexquisite02-bmnew.jpg',
    'https://bankmega.com/media/filer_public/e3/a6/e3a6f139-abc8-494b-b5e4-93f4ba9ddc62/cbtlgen-bmnew.jpg',
    'https://bankmega.com/media/filer_public/f7/8e/f78e2f4a-e2f5-4917-8b17-40e1ef9ff95d/portodormancymakan_bm01.jpg'
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


  constructor(private router: Router) {
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

    if(this.transactions.length <2){
      this.removed = this.transactions;
      console.log('removed ', this.removed);

    }
    else{
      this.removed = this.transactions.slice(0,2);
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
