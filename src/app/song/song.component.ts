import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrl: './song.component.css'
})
export class SongComponent {
  songSrc: string='';
  imgSrc: string='';
  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.songSrc = params['songSrc'];
      this.imgSrc = params['imgSrc'];
    });
  }
}
