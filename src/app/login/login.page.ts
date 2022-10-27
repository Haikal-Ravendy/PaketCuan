import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logs: string[] = [];
  pass: boolean;

  constructor(private router: Router) {
    this.pass = false;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  pushLog(msg) {
    this.logs.unshift(msg);
  }

  handleChange(e) {
    this.pushLog('ionChange fired with value: ' + e.detail.value);
    this.pass=true;
  }

  goToHome(){
    this.router.navigateByUrl('home');
  }


}
