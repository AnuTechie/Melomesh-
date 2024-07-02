import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  selectedOption: 'card' | 'qrCode' = 'card'; // Default selected option
  validateMsg:string='';
  show:boolean=true;
  cardNumber:string='';
  expiryDate:string='';
  cvv:string='';
  msg:string="";
  sList:any[]=[];
  u : string | null ="";
  constructor(private util:NodeUtilityService,private router:Router){
    this.u= localStorage.getItem('user');
  }
  onSubmit(form: any) {
   // alert(form.value.cardNumber);
    if(this.u){
      this.util
      .ins(
        this.u,
        form.value.cardNumber,
        form.value.expiryDate,
        form.value.cvv
      )
      .subscribe((data) => {
        if (data.status) {
          this.msg = data.message;
          this.validateMsg = 'payment succesful';
          console.log("successs");
        } else {
          this.msg = data.message;
          this.show = true;
          
        }
      });
    }
    
  }
  

  /*disp() {
    this.util.ins(this.cardNumber,this.expiryDate,this.cvv).subscribe((data) => {
      if (data.status) {
        this.sList = data.list;
      }
      this.msg = data.message;
    });
  }*/

  processPayment(): void {
    if (this.selectedOption === 'card') {
      // Handle card payment
      console.log('Processing card payment...');
      this.show=true;
      this.validateMsg="Payment successful";
    } else if (this.selectedOption === 'qrCode') {
      // Handle QR code payment
      console.log('Processing QR code payment...');
    }
  }
  
}
