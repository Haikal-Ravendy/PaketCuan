import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

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

  constructor() {
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
    this.username = '';
    this.name = '';
    this.password = '';
    this.avatar = '';
  }

  async takeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

  //   console.log('Result Image', image.base64String);
  //   this.avatar = `data:image/jpeg;base64, ${image.base64String}`;

  //   // Set avatar value to contact form
  //   this.contactForm.get('avatar').setValue(this.avatar);

  //   this.cdr.detectChanges();
  // }
  }
}
