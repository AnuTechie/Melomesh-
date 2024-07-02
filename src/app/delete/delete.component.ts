import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  msg: string = '';
 constructor (private util:NodeUtilityService,private router:Router){}
    onSubmit(form: any) {
      this.util
        .delete(
          form.value.email,
          form.value.password
        )
        .subscribe((data) => {
          if (data.status) {
            this.msg = data.message;
            this.router.navigateByUrl('/landing');
          } else {
            this.msg = data.message;
            this.router.navigateByUrl('/delete');
          }
        });
  }
}
