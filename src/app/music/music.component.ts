import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {
  user: string = '';
  username:string|null='';
  constructor(private router:Router) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
    const atIndex = this.user.indexOf('@');
    
    if (atIndex !== -1) {
      this.username = this.user.substring(0, atIndex); // Extract the substring before '@'
      console.log(this.username); // This will log the extracted username
    }
    
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
}
ngOnInit(): void {
  
}
playSong(songSrc: string,imgSrc:string) {
    
    this.router.navigate(['/song'], { queryParams: { songSrc: songSrc , imgSrc: imgSrc} });

  }

}