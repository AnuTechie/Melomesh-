import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent  implements OnInit{
  show: boolean=true;
  msg: string = '';
  username1:string='';
  validateMsg:string='';
  pass:string='';
  email:string='';
  mob:string='';
  constructor(private util:NodeUtilityService, private router:Router) {}
  onSubmit(form: any) {
    this.util
      .insert(
        form.value.username,
        form.value.email,
        form.value.password,
        form.value.mobile,
        form.value.gender
      )
      .subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
          this.show=false;
          this.router.navigateByUrl('/login');
          console.log("successs");
        } else {
          this.msg = data.message;
          this.show = true;
          this.validateMsg = 'User already exists!!';
          this.router.navigateByUrl('/signup');
        }
      });
  }
  ngOnInit(): void {
    // Get reference to the button element
    const button = document.getElementById('10');

    // Add click event listener
    if (button) {
      // Add click event listener
      button.addEventListener('click', () => {
        // Change button color
        button.style.backgroundColor ='white';
      });
    }
  }  
 

}
