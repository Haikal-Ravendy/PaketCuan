import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-x',
  templateUrl: './login-x.page.html',
  styleUrls: ['./login-x.page.scss'],
})
export class LoginXPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) {
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
    this.router.navigateByUrl('home');

  }

}
