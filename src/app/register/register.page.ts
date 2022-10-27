import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Account } from 'src/entities/account';
import { AccountService } from '../services/dao/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  password: string;
  name: string;
  avatar: string;

  constructor(private accountService: AccountService, private router: Router) {
    this.username = '';
    this.name = '';
    this.password = '';
    this.avatar = '';
  }

  ngOnInit() {
  }

  submit(){
    console.log('username: ', this.username);
    console.log('name: ', this.name);
    console.log('password: ', this.password);
    console.log('avatar ', this.avatar);
    const newAcc = new Account();
    newAcc.username =this.username;
    newAcc.password = this.password;
    newAcc.name = this.name;
    newAcc.balance = 5000000;
    newAcc.cardNumber = new Date().valueOf() + Math.random();
    newAcc.avatar = this.avatar;
    console.log('Card Number: ' + newAcc.cardNumber);
    this.accountService.insertOrUpdate(newAcc);
    console.log('New Account is created! ' + newAcc);

    // this.username = '';
    // this.name = '';
    // this.password = '';
    // this.avatar = '';

    this.router.navigateByUrl('/login');
  }

  async takeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    console.log('Result Image', image.base64String);
    this.avatar = `data:image/jpeg;base64, ${image.base64String}`;

    // // Set avatar value to contact form
    // this.contactForm.get('avatar').setValue(this.avatar);

    // this.cdr.detectChanges();
  }
}
