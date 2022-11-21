import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-text',
  templateUrl: './default-text.component.html',
  styleUrls: ['./default-text.component.scss'],
})
export class DefaultTextComponent implements OnInit {

  @Input() primarytext

  constructor() { }

  ngOnInit() {}

}
