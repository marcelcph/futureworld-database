import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {

  @Input() hero
  constructor() { }

  ngOnInit() {}

}
