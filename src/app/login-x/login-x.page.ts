import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/dao/account.service';

@Component({
  selector: 'app-login-x',
  templateUrl: './login-x.page.html',
  styleUrls: ['./login-x.page.scss'],
})
export class LoginXPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private accountService: AccountService) {
    this.username = '';
    this.password = '';
   }

  ngOnInit() {
  }

  async submit(){
    console.log('username: ', this.username);
    console.log('password: ', this.password);
    console.log('All acc ', await this.accountService.all());

    const acc = await this.accountService.findOne({username: this.username});
    if(acc){
      if(acc.password === this.password){
        this.router.navigateByUrl('/home', {state:acc});
      }
      else{
        alert('Password salah!');
      }
    }
    else{
      alert('Username tidak terdaftar!');
    }
    console.log('Halo', acc);

    this.username = '';
    this.password = '';


  }

}
