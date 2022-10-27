import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-x',
  templateUrl: './login-x.page.html',
  styleUrls: ['./login-x.page.scss'],
})
export class LoginXPage implements OnInit {

  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
   }

  ngOnInit() {
  }

  submit(){
    console.log('username: ', this.username);
    console.log('password: ', this.password);
    this.username = '';
    this.password = '';

  }

}
