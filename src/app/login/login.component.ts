import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  show:boolean=true;
  validateMsg:string='';
  email: string = '';
  password: string = '';
  user: string = '';
  msg: string = '';
  constructor(private util: NodeUtilityService, private router: Router) {}
  onSubmit(form: any) {
    this.util
      .retrieve(form.value.email, form.value.password)
      .subscribe((data) => {
        if (data.status) {
          localStorage.setItem('user', form.value.email);
          this.msg = data.message;
          this.show=false;
          if(form.value.email=="admin@gmail.com"){
          this.router.navigateByUrl('/admin');}
          else{
           this.router.navigateByUrl('/music');
          }
        } else {
          this.msg = data.message;
          this.show = true;
          this.validateMsg = 'Invalid Credentials!! Please enter valid credentials';
          this.router.navigateByUrl('/login');
        }
      });
  }
}
