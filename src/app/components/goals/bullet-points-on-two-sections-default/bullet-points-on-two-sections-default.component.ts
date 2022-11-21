import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-points-on-two-sections-default',
  templateUrl: './bullet-points-on-two-sections-default.component.html',
  styleUrls: ['./bullet-points-on-two-sections-default.component.scss'],
})
export class BulletPointsOnTwoSectionsDefaultComponent implements OnInit {

  @Input() secondarylist

  constructor() { }

  ngOnInit() {}

}
