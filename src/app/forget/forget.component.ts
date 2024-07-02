import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  msg: string = '';
  show:boolean=true;
  validateMsg:string='';
  constructor(private util:NodeUtilityService, private router:Router) {}
    onSubmit(form: any) {
      this.util
        .update(
          form.value.email,
          form.value.confpass
        )
        .subscribe((data) => {
          if (data.status) {
            this.msg = data.message;
            this.router.navigateByUrl('/login');
          } else {
            this.msg = data.message;
            this.show = true;
            this.validateMsg = 'User not found';
            this.router.navigateByUrl('/forget');
          }
        });
  }
}