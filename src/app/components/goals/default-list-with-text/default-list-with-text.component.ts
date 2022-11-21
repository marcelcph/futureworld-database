import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-default-list-with-text',
  templateUrl: './default-list-with-text.component.html',
  styleUrls: ['./default-list-with-text.component.scss'],
})
export class DefaultListWithTextComponent implements OnInit {

  @Input() primarylist

  constructor() { }

  ngOnInit() {}

}
