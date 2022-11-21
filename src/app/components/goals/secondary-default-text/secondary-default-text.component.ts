import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-default-text',
  templateUrl: './secondary-default-text.component.html',
  styleUrls: ['./secondary-default-text.component.scss'],
})
export class SecondaryDefaultTextComponent implements OnInit {

  @Input() secondarytext

  constructor() { }

  ngOnInit() {}

}
