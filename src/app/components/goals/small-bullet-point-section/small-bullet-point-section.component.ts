import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-small-bullet-point-section',
  templateUrl: './small-bullet-point-section.component.html',
  styleUrls: ['./small-bullet-point-section.component.scss'],
})
export class SmallBulletPointSectionComponent implements OnInit {

  @Input() smalllist

  constructor() { }

  ngOnInit() {}

}
