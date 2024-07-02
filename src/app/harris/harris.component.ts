import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-harris',
  templateUrl: './harris.component.html',
  styleUrl: './harris.component.css'
})
export class HarrisComponent {
  imgSrc:string='';
  songSrc:string='';
  constructor(private router:Router){}
  playSong(songSrc: string,imgSrc:string) {
    this.router.navigate(['/song'], { queryParams: { songSrc: songSrc , imgSrc: imgSrc} });
  }
}
