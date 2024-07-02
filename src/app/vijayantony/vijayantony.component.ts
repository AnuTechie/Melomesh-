import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vijayantony',
  templateUrl: './vijayantony.component.html',
  styleUrl: './vijayantony.component.css'
})
export class VijayantonyComponent {
  imgSrc:string='';
  songSrc:string='';
  constructor(private router:Router){}
  playSong(songSrc: string,imgSrc:string) {
    this.router.navigate(['/song'], { queryParams: { songSrc: songSrc , imgSrc: imgSrc} });
  }
}
