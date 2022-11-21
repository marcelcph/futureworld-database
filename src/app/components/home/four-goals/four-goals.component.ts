import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-goals',
  templateUrl: './four-goals.component.html',
  styleUrls: ['./four-goals.component.scss'],
})
export class FourGoalsComponent implements OnInit {

  fullscreen(video){
    video.play();
    video.requestFullscreen();
}

  constructor() { }

  ngOnInit() {}

}
