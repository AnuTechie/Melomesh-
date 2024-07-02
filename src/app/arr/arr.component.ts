import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrl: './arr.component.css'
})
export class ArrComponent {
  imgSrc:string='';
  songSrc:string='';
  constructor(private router:Router){}
  playSong(songSrc: string,imgSrc:string) {
    this.router.navigate(['/song'], { queryParams: { songSrc: songSrc , imgSrc: imgSrc} });
  }
}
