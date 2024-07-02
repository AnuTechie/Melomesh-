import { Component, HostListener } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  users: any[] = [];
  user:string='';
  username:string='';
  user1:any={};
  email: string = '';
name: string = '';
phone:string = '';

  constructor(private util: NodeUtilityService,private router:Router) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
  }
  getusers(): void {
    // Call venue service to fetch venues
    this.util.display().subscribe((data) => {
      this.users = data.item;
    });
  }
  getone():void{
    this.util.display1(this.username).subscribe((data)=>{
      this.user1=data.item;
    })
  }
  onSubmit(){
    
  }
  isHovering: boolean = false;

  // Function to handle mouseenter event
  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target: HTMLElement): void {
    if (target.id === 'logout-link') {
    //  this.isHovering = true;
      target.classList.add('hover-effect');
    }
  }

  // Function to handle mouseleave event
  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target: HTMLElement): void {
    if (target.id === 'logout-link') {
     // this.isHovering = false;
      target.classList.remove('hover-effect');
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
}
}

